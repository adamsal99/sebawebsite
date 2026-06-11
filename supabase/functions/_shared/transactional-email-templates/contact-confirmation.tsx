import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Section, Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = 'SEBA'

interface ContactConfirmationProps {
  name?: string
  message?: string
}

const ContactConfirmationEmail = ({ name, message }: ContactConfirmationProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>Thanks for reaching out to {SITE_NAME}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>
          {name ? `Thank you, ${name}.` : 'Thank you for reaching out.'}
        </Heading>
        <Text style={text}>
          We've received your message and one of our team will get back to you shortly.
        </Text>
        {message ? (
          <Section style={quoteBox}>
            <Text style={quoteLabel}>Your message</Text>
            <Text style={quoteText}>{message}</Text>
          </Section>
        ) : null}
        <Text style={text}>
          In the meantime, if anything is urgent, just reply to this email directly.
        </Text>
        <Text style={signature}>— The {SITE_NAME} team</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: ContactConfirmationEmail,
  subject: `Thanks for contacting ${SITE_NAME}`,
  displayName: 'Contact form confirmation',
  previewData: { name: 'Jane', message: 'I would like to discuss MENA expansion.' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Inter, Arial, sans-serif' }
const container = { padding: '32px 28px', maxWidth: '560px' }
const h1 = { fontSize: '24px', fontWeight: 'bold', color: '#111111', margin: '0 0 20px' }
const text = { fontSize: '15px', color: '#444444', lineHeight: '1.6', margin: '0 0 20px' }
const quoteBox = {
  borderLeft: '3px solid #F58148',
  backgroundColor: '#fafaf8',
  padding: '14px 18px',
  margin: '0 0 24px',
}
const quoteLabel = {
  fontSize: '11px',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.1em',
  color: '#6B8B8B',
  margin: '0 0 6px',
  fontWeight: 600,
}
const quoteText = { fontSize: '14px', color: '#333333', lineHeight: '1.5', margin: 0 }
const signature = { fontSize: '14px', color: '#666666', margin: '28px 0 0' }
