'use client';

import React, { useEffect } from 'react';
import { Language } from '@/types';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose, lang }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const content = {
    PT: {
      title: 'POLÍTICA DE PRIVACIDADE E COOKIES',
      subtitle: '– SOLFIL, S.A.',
      intro: 'A SOLFIL – Materiais de Construção S.A. (doravante "SOLFIL") valoriza a confiança dos seus clientes e utilizadores. Esta política descreve como recolhemos, utilizamos e protegemos os seus dados pessoais, em total conformidade com o RGPD (Regulamento Geral de Proteção de Dados - UE 2016/679).',
      sections: [
        {
          id: '01',
          title: 'INTRODUÇÃO',
          text: 'A SOLFIL garante que a privacidade e a proteção dos dados dos utilizadores são fundamentais para manter uma relação de transparência. Ao utilizar o nosso website, pressupõe-se a aceitação deste acordo. Recomendamos a consulta regular desta página, pois podemos alterar este acordo sem aviso prévio para refletir atualizações legislativas.'
        },
        {
          id: '02',
          title: 'DEFINIÇÕES E DADOS RECOLHIDOS',
          list: [
            'Informações Pessoais: Dados que o identificam diretamente, como Nome, NIF, Morada de entrega/faturação, E-mail e Número de Telefone.',
            'Dados Recolhidos Automaticamente: Informações do navegador, endereço IP, localização geográfica aproximada e padrões de navegação, recolhidos através de cookies para otimizar a sua experiência técnica.',
            'Dados de Terceiros: Caso nos envie dados de outras pessoas (ex: para entregas), assumimos que possui autorização prévia para o fazer.'
          ]
        },
        {
          id: '03',
          title: 'FINALIDADE DO TRATAMENTO',
          introText: 'A SOLFIL trata os seus dados apenas para os fins estritamente necessários:',
          list: [
            '1. Gestão Comercial: Processamento de orçamentos, encomendas e faturação de materiais de construção.',
            '2. Apoio ao Cliente: Responder a pedidos de contacto ou dúvidas técnicas.',
            '3. Marketing (com consentimento): Envio de novidades e campanhas exclusivas.',
            '4. Segurança: Prevenção de fraude e garantia da integridade do nosso sistema.'
          ]
        },
        {
          id: '04',
          title: 'SEGURANÇA E RETENÇÃO',
          text: 'Implementamos salvaguardas físicas e eletrónicas para proteger os seus dados contra acessos não autorizados. Os dados são conservados apenas pelo período necessário à finalidade da recolha (ex: obrigações fiscais por 10 anos) ou até que o utilizador solicite a sua eliminação, caso não exista obrigação legal contrária.'
        },
        {
          id: '05',
          title: 'DIREITOS DO UTILIZADOR',
          introText: 'Nos termos da lei, o utilizador pode solicitar à SOLFIL:',
          list: [
            'O acesso e cópia dos seus dados;',
            'A retificação de informações incorretas;',
            'A eliminação dos dados ou limitação do tratamento;',
            'A retirada do consentimento a qualquer momento.'
          ],
          footerText: 'Contacto para Privacidade: geral@solfil.pt'
        },
        {
          id: '06',
          title: 'POLÍTICA DE COOKIES',
          introText: 'Utilizamos cookies para melhorar a funcionalidade do site:',
          list: [
            'Cookies Estritamente Necessários: Para o funcionamento básico do site.',
            'Cookies Analíticos (ex: Google Analytics): Para medir o desempenho e melhorar a navegação. Pode desativar os cookies nas definições do seu navegador, embora isso possa afetar algumas funcionalidades do site.'
          ]
        },
        {
          id: '07',
          title: 'INFORMAÇÃO AO CONSUMIDOR (RAL)',
          introText: 'Em cumprimento da Lei n.º 144/2015, informamos que, em caso de litígio, o consumidor pode recorrer ao seguinte Mecanismo de Resolução Extrajudicial de Litígios de Consumo:',
          text: 'CIMAAL – Centro de Informação, Medição e Arbitragem de Consumo do Algarve',
          list: [
            'Endereço: Rua Monsenhor Henrique Ferreira da Silva, nº 9 – 3º, Edifício Ninho de Empresas – Sala 26, 8005-137 FARO',
            'E-mail: cimaal@mail.telepac.pt',
            'Website: www.cimaal.pt',
            'Telefone: 289 823 135 | Fax: 289 812 213'
          ]
        },
        {
          id: '08',
          title: 'LIVRO DE RECLAMAÇÕES',
          text: 'Disponibilizamos também o acesso ao Livro de Reclamações Eletrónico em: www.livroreclamacoes.pt.'
        }
      ],
      lastUpdate: 'Última atualização: Janeiro de 2026'
    },
    EN: {
      title: 'PRIVACY AND COOKIES POLICY',
      subtitle: '– SOLFIL, S.A.',
      intro: 'SOLFIL – Materiais de Construção S.A. (hereinafter "SOLFIL") values the trust of its customers and users. This policy describes how we collect, use, and protect your personal data, in full compliance with the GDPR (General Data Protection Regulation - EU 2016/679).',
      sections: [
        {
          id: '01',
          title: 'INTRODUCTION',
          text: 'SOLFIL ensures that privacy and data protection are fundamental to maintaining a transparent relationship. By using our website, you agree to this policy. We recommend regular consultation of this page, as we may change this agreement without prior notice to reflect legislative updates.'
        },
        {
          id: '02',
          title: 'DEFINITIONS AND COLLECTED DATA',
          list: [
            'Personal Information: Data that identifies you directly, such as Name, Tax ID (NIF), Delivery/billing address, Email, and Phone number.',
            'Automatically Collected Data: Browser information, IP address, approximate geographical location, and navigation patterns, collected through cookies to optimize your technical experience.',
            'Third-Party Data: If you send us data about other people (e.g., for deliveries), we assume you have prior authorization to do so.'
          ]
        },
        {
          id: '03',
          title: 'PURPOSE OF PROCESSING',
          introText: 'SOLFIL processes your data only for strictly necessary purposes:',
          list: [
            '1. Commercial Management: Processing quotes, orders, and invoicing for construction materials.',
            '2. Customer Support: Responding to contact requests or technical questions.',
            '3. Marketing (with consent): Sending news and exclusive campaigns.',
            '4. Security: Fraud prevention and ensuring our system integrity.'
          ]
        },
        {
          id: '04',
          title: 'SECURITY AND RETENTION',
          text: 'We implement physical and electronic safeguards to protect your data from unauthorized access. Data is kept only for the period necessary for the purpose of collection (e.g., tax obligations for 10 years) or until the user requests its deletion, unless there is a contrary legal obligation.'
        },
        {
          id: '05',
          title: 'USER RIGHTS',
          introText: 'Under the law, the user may request from SOLFIL:',
          list: [
            'Access to and a copy of their data;',
            'Rectification of incorrect information;',
            'Deletion of data or limitation of processing;',
            'Withdrawal of consent at any time.'
          ],
          footerText: 'Privacy Contact: geral@solfil.pt'
        },
        {
          id: '06',
          title: 'COOKIE POLICY',
          introText: 'We use cookies to improve site functionality:',
          list: [
            'Strictly Necessary Cookies: For basic site operation.',
            'Analytical Cookies (e.g., Google Analytics): To measure performance and improve navigation. You can disable cookies in your browser settings, although this may affect some site functionalities.'
          ]
        },
        {
          id: '07',
          title: 'CONSUMER INFORMATION (RAL)',
          introText: 'In compliance with Law No. 144/2015, we inform you that, in case of dispute, the consumer may resort to the following Extrajudicial Settlement Mechanism for Consumer Disputes:',
          text: 'CIMAAL – Centro de Informação, Medição e Arbitragem de Consumo do Algarve',
          list: [
            'Address: Rua Monsenhor Henrique Ferreira da Silva, nº 9 – 3º, Edifício Ninho de Empresas – Sala 26, 8005-137 FARO',
            'Email: cimaal@mail.telepac.pt',
            'Website: www.cimaal.pt',
            'Phone: 289 823 135 | Fax: 289 812 213'
          ]
        },
        {
          id: '08',
          title: 'COMPLAINTS BOOK',
          text: 'We also provide access to the Electronic Complaints Book at: www.livroreclamacoes.pt.'
        }
      ],
      lastUpdate: 'Last update: January 2026'
    }
  }[lang];

  return (
    <div 
      className="fixed inset-0 z-[10002] flex items-center justify-center p-4 sm:p-6 md:p-10 animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-solfil-black/80 backdrop-blur-md"></div>
      
      <div 
        className="relative bg-white w-full max-w-4xl max-h-[90vh] rounded-[32px] md:rounded-[48px] shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-solfil-black hover:bg-solfil-orange hover:text-white transition-all shadow-sm"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8 md:p-12 overflow-y-auto no-scrollbar">
          <header className="mb-10">
            <h2 className="text-2xl md:text-3xl font-black text-solfil-black uppercase tracking-tight leading-none mb-2">
              {content.title}
            </h2>
            <p className="text-solfil-orange font-bold text-sm tracking-widest uppercase mb-6">
              {content.subtitle}
            </p>
            <p className="text-solfil-gray text-base leading-relaxed">
              {content.intro}
            </p>
          </header>

          <div className="space-y-10">
            {content.sections.map((section) => (
              <section key={section.id} className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-solfil-orange/20 font-black text-2xl tracking-tighter">{section.id}</span>
                  <h3 className="text-sm font-black text-solfil-black uppercase tracking-[0.2em]">
                    {section.title}
                  </h3>
                </div>
                
                {section.text && (
                  <p className="text-solfil-gray text-sm leading-relaxed pl-10">
                    {section.text}
                  </p>
                )}
                
                {section.introText && (
                  <p className="text-solfil-gray text-sm leading-relaxed pl-10 italic">
                    {section.introText}
                  </p>
                )}

                {section.list && (
                  <ul className="space-y-3 pl-10">
                    {section.list.map((item, idx) => (
                      <li key={idx} className="flex gap-3 text-solfil-gray text-sm leading-relaxed">
                        <span className="text-solfil-orange flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-solfil-orange"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {section.footerText && (
                  <p className="text-solfil-black font-bold text-sm pl-10 pt-2">
                    {section.footerText}
                  </p>
                )}
              </section>
            ))}
          </div>

          <footer className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
            <img 
              src="https://raw.githubusercontent.com/solfil/solfil/solfil-assets/assets/logo.png" 
              alt="Solfil" 
              className="h-5 brightness-0 opacity-20" 
            />
            <span className="text-[10px] font-black text-solfil-gray/40 uppercase tracking-[0.3em]">
              {content.lastUpdate}
            </span>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default PrivacyModal;
