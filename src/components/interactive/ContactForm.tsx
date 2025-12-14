import { createSignal, Show } from 'solid-js';
import { z } from 'zod';
import { t } from '../../lib/i18n';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Label } from '../ui/Label';
import { Textarea } from '../ui/Textarea';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email(),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface Props {
  azureFunctionUrl: string;
}

export function ContactForm(props: Props) {
  const [submitStatus, setSubmitStatus] = createSignal<'idle' | 'loading' | 'success' | 'error'>(
    'idle'
  );
  const [errorMessage, setErrorMessage] = createSignal('');
  const [errors, setErrors] = createSignal<Record<string, string>>({});

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    setErrors({});

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data: ContactFormData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    };

    const result = contactSchema.safeParse(data);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as string;
        fieldErrors[field] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setSubmitStatus('loading');

    try {
      const response = await fetch(props.azureFunctionUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to send message');

      setSubmitStatus('success');
      form.reset();
    } catch {
      setSubmitStatus('error');
      setErrorMessage(t('contact.form.error'));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div class="space-y-4">
        <div>
          <Label for="name">{t('contact.form.name')}</Label>
          <Input type="text" id="name" name="name" placeholder="John Doe" required />
          <Show when={errors().name}>
            <span class="text-sm text-destructive">{errors().name}</span>
          </Show>
        </div>

        <div>
          <Label for="email">{t('contact.form.email')}</Label>
          <Input type="email" id="email" name="email" placeholder="john@example.com" required />
          <Show when={errors().email}>
            <span class="text-sm text-destructive">{errors().email}</span>
          </Show>
        </div>

        <div>
          <Label for="subject">{t('contact.form.subject')}</Label>
          <Input type="text" id="subject" name="subject" placeholder="Project inquiry" required />
          <Show when={errors().subject}>
            <span class="text-sm text-destructive">{errors().subject}</span>
          </Show>
        </div>

        <div>
          <Label for="message">{t('contact.form.message')}</Label>
          <Textarea id="message" name="message" rows={5} placeholder="Your message..." required />
          <Show when={errors().message}>
            <span class="text-sm text-destructive">{errors().message}</span>
          </Show>
        </div>

        <Button type="submit" disabled={submitStatus() === 'loading'} class="w-full">
          {submitStatus() === 'loading' ? t('contact.form.sending') : t('contact.form.submit')}
        </Button>

        <Show when={submitStatus() === 'success'}>
          <p class="text-sm text-green-500">{t('contact.form.success')}</p>
        </Show>
        <Show when={submitStatus() === 'error'}>
          <p class="text-sm text-destructive">{errorMessage()}</p>
        </Show>
      </div>
    </form>
  );
}
