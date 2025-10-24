"use client";

import { useCallback, useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Instagram, MessageCircle } from "lucide-react";

//TODO Ajeitar parte icones de contato

export default function Contact() {
  const [name, setName] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const socialLinks = useMemo(
    () => [
      {
        label: "GitHub",
        href: "https://github.com/",
        icon: Github,
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/",
        icon: Linkedin,
      },
      {
        label: "Instagram",
        href: "https://www.instagram.com/",
        icon: Instagram,
      },
      {
        label: "WhatsApp",
        href: `https://wa.me/5579988667249?text=${encodeURIComponent("Olá, John tudo bom ?")}`,
        icon: MessageCircle,
      },
    ],
    []
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setFeedback(null);
      setSubmitting(true);
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, fromEmail, subject, message }),
        });
        if (!res.ok) throw new Error("Falha ao enviar");
        setFeedback("Mensagem enviada com sucesso!");
        setName("");
        setFromEmail("");
        setSubject("");
        setMessage("");
      } catch (err) {
        setFeedback("Não foi possível enviar. Tente novamente.", err);
      } finally {
        setSubmitting(false);
      }
    },
    [name, fromEmail, subject, message]
  );

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
          Contato
        </h1>
        <p className="text-muted-foreground mt-2 text-sm">
          Me encontre nas redes, chame no WhatsApp ou envie uma mensagem pelo
          formulário.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-1">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Redes e contatos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-medium transition-colors hover:border-accent hover:bg-accent/10"
                    aria-label={label}
                    title={label}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="hidden sm:inline">{label}</span>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Enviar email</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="name"
                      className="text-sm text-muted-foreground"
                    >
                      Nome
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="h-10 rounded-md border bg-background px-3 text-sm outline-none ring-0 transition-[border-color] focus:border-accent"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Seu nome"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="email"
                      className="text-sm text-muted-foreground"
                    >
                      Seu email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="h-10 rounded-md border bg-background px-3 text-sm outline-none ring-0 transition-[border-color] focus:border-accent"
                      value={fromEmail}
                      onChange={(e) => setFromEmail(e.target.value)}
                      placeholder="voce@exemplo.com"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="subject"
                    className="text-sm text-muted-foreground"
                  >
                    Assunto
                  </label>
                  <input
                    id="subject"
                    type="text"
                    className="h-10 rounded-md border bg-background px-3 text-sm outline-none ring-0 transition-[border-color] focus:border-accent"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Assunto do email"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="message"
                    className="text-sm text-muted-foreground"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    className="min-h-[140px] rounded-md border bg-background p-3 text-sm outline-none ring-0 transition-[border-color] focus:border-accent"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Escreva sua mensagem aqui..."
                    required
                  />
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium transition-colors hover:border-accent hover:bg-accent/10 disabled:opacity-60"
                  >
                    {submitting ? "Enviando..." : "Enviar"}
                  </button>
                  <span className="text-xs text-muted-foreground">
                    Vai para{" "}
                    <span className="font-medium">
                      johnrodriguesdeveloper@gmail.com
                    </span>
                  </span>
                </div>
                {feedback && (
                  <p className="text-sm text-muted-foreground">{feedback}</p>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
