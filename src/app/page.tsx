const companyName = process.env.NEXT_PUBLIC_COMPANY_NAME || "Empresa";
const companyCnpj = process.env.NEXT_PUBLIC_COMPANY_CNPJ || "00.000.000/0001-00";
const companyDomain = process.env.NEXT_PUBLIC_COMPANY_DOMAIN || "exemplo.com";
const companyEmail = process.env.NEXT_PUBLIC_COMPANY_EMAIL || "contato@exemplo.com";
const companyDescription =
  process.env.NEXT_PUBLIC_COMPANY_DESCRIPTION ||
  "Soluções em comunicação empresarial";

export default function Home() {
  return (
    <div className="flex flex-col min-h-full bg-white">
      {/* Header */}
      <header className="border-b border-zinc-200">
        <div className="mx-auto max-w-5xl px-6 py-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-zinc-900">{companyName}</h1>
          <a
            href={`mailto:${companyEmail}`}
            className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
          >
            Contato
          </a>
        </div>
      </header>

      {/* Hero */}
      <main className="flex-1">
        <section className="mx-auto max-w-5xl px-6 py-20">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
              {companyDescription}
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-600">
              A <strong>{companyName}</strong> oferece soluções completas de
              comunicação empresarial via WhatsApp Business, ajudando empresas a
              se conectarem com seus clientes de forma eficiente, segura e
              escalável.
            </p>
          </div>
        </section>

        {/* Serviços */}
        <section className="bg-zinc-50 border-y border-zinc-200">
          <div className="mx-auto max-w-5xl px-6 py-16">
            <h3 className="text-2xl font-semibold text-zinc-900 mb-10">
              Nossos Serviços
            </h3>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Mensagens em Massa",
                  desc: "Envie campanhas de WhatsApp para milhares de contatos com alta taxa de entrega e personalização.",
                },
                {
                  title: "API de Integração",
                  desc: "Integre o WhatsApp Business ao seu sistema com nossa API robusta e documentada.",
                },
                {
                  title: "Gestão de Templates",
                  desc: "Crie e gerencie templates de mensagens aprovados pelo Meta com facilidade.",
                },
                {
                  title: "Relatórios e Analytics",
                  desc: "Acompanhe métricas de envio, entrega e leitura em tempo real.",
                },
                {
                  title: "Suporte Dedicado",
                  desc: "Equipe técnica especializada para auxiliar na integração e operação.",
                },
                {
                  title: "Conformidade e Segurança",
                  desc: "Infraestrutura segura em conformidade com LGPD e políticas do Meta.",
                },
              ].map((service) => (
                <div
                  key={service.title}
                  className="rounded-lg bg-white p-6 border border-zinc-200"
                >
                  <h4 className="text-lg font-semibold text-zinc-900">
                    {service.title}
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sobre */}
        <section className="mx-auto max-w-5xl px-6 py-16">
          <h3 className="text-2xl font-semibold text-zinc-900 mb-6">
            Sobre a {companyName}
          </h3>
          <div className="prose prose-zinc max-w-none">
            <p className="text-zinc-600 leading-7">
              A <strong>{companyName}</strong> é uma empresa brasileira
              especializada em soluções de comunicação via WhatsApp Business
              Platform. Atuamos como provedora de soluções empresariais (BSP),
              oferecendo infraestrutura confiável para empresas que desejam
              utilizar o WhatsApp como canal de comunicação com seus clientes.
            </p>
            <p className="mt-4 text-zinc-600 leading-7">
              Nossa plataforma permite o envio de mensagens transacionais,
              notificações, campanhas de marketing e atendimento ao cliente,
              tudo integrado via API ou painel de controle intuitivo.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-5xl px-6 py-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-lg font-semibold text-zinc-900">
                {companyName}
              </p>
              <p className="mt-1 text-sm text-zinc-500">
                CNPJ: {companyCnpj}
              </p>
            </div>
            <div className="text-sm text-zinc-500 space-y-1">
              <p>
                <strong className="text-zinc-700">Email:</strong>{" "}
                <a
                  href={`mailto:${companyEmail}`}
                  className="text-blue-600 hover:text-blue-800"
                >
                  {companyEmail}
                </a>
              </p>
              <p>
                <strong className="text-zinc-700">Site:</strong>{" "}
                <a
                  href={`https://${companyDomain}`}
                  className="text-blue-600 hover:text-blue-800"
                >
                  {companyDomain}
                </a>
              </p>
            </div>
          </div>
          <div className="mt-8 border-t border-zinc-200 pt-6 text-center text-xs text-zinc-400">
            &copy; {new Date().getFullYear()} {companyName}. Todos os direitos
            reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
