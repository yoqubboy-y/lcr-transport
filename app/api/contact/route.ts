import { NextRequest, NextResponse } from "next/server";

const BASE_URL = process.env.CHATWOOT_BASE_URL!;
const INBOX_ID = process.env.CHATWOOT_INBOX_IDENTIFIER!;

export async function POST(request: NextRequest) {
  const { name, email, phone, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
  }

  const contactRes = await fetch(
    `${BASE_URL}/public/api/v1/inboxes/${INBOX_ID}/contacts`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phone_number: phone || undefined }),
    }
  );

  if (!contactRes.ok) {
    return NextResponse.json({ error: "Failed to create contact." }, { status: 502 });
  }

  const contact = await contactRes.json();

  const convRes = await fetch(
    `${BASE_URL}/public/api/v1/inboxes/${INBOX_ID}/contacts/${contact.source_id}/conversations`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    }
  );

  if (!convRes.ok) {
    return NextResponse.json({ error: "Failed to create conversation." }, { status: 502 });
  }

  const conversation = await convRes.json();

  const msgRes = await fetch(
    `${BASE_URL}/public/api/v1/inboxes/${INBOX_ID}/contacts/${contact.source_id}/conversations/${conversation.id}/messages`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: message }),
    }
  );

  if (!msgRes.ok) {
    return NextResponse.json({ error: "Failed to send message." }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
