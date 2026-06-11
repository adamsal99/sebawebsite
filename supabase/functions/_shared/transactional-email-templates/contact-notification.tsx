import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Section, Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = 'SEBA'

interface ContactNotificationProps {
  name?: string
  email?: string
  message?: string
}

const ContactNotificationEmail = ({ name, email, message }: ContactNotificationProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>New contact form submission from {name || 'website'}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New contact form submission</Heading>
        <Section style={field}>
          <Text style={label}>Name</Text>
          <Text style={value}>{name || '—'}</Text>
        </Section>
        <Section style={field}>
          <Text style={label}>Email</Text>
          <Text style={value}>{email || '—'}</Text>
        </Section>
        <Section style={field}>
          <Text style={label}>Message</Text>
          <Text style={value}>{message || '—'}</Text>
        </Section>
        <Text style={footer}>Sent from {SITE_NAME} website contact form.</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: ContactNotificationEmail,
  subject: (data) =>
    `New contact form submission${data.name ? ` from ${data.name}` : ''}`,
  to: 'ibrahym@weareseba.com',
  displayName: 'Contact form notification (internal)',
  previewData: {
    name: 'Jane Doe',
    email: 'jane@example.com',
    message: 'Hi, I would like to learn more about MENA expansion.',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Inter, Arial, sans-serif' }
const container = { padding: '32px 28px', maxWidth: '560px' }
const h1 = { fontSize: '22px', fontWeight: 'bold', color: '#111111', margin: '0 0 24px' }
const field = { margin: '0 0 18px' }
const label = {
  fontSize: '11px',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.1em',
  color: '#6B8B8B',
  fontWeight: 600,
  margin: '0 0 4px',
}
const value = { fontSize: '15px', color: '#222222', margin: 0, whiteSpace: 'pre-wrap' as const }
const footer = { fontSize: '12px', color: '#999999', margin: '32px 0 0' }
