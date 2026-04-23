export default function PrivacyPageContent() {
  return (
    <section className="mx-auto w-full max-w-[1920px] px-20 pt-[161px] pb-[155px] max-lg:px-5 max-lg:pt-[102px] max-lg:pb-[80px] max-md:px-[10px] max-md:pt-[57px] max-md:pb-[60px]">
      {/* Page title */}
      <h1 className="font-[family-name:var(--font-roboto)] text-[clamp(5rem,6.77vw,8.125rem)] font-medium leading-[0.85] tracking-normal uppercase text-[#333] opacity-70 mb-[120px] max-lg:text-[83px] max-lg:mb-[60px] max-md:text-[35px] max-md:mb-[30px]">
        Privacy Policy
      </h1>

      {/* Policy sections */}
      <div className="flex flex-col gap-[60px] max-lg:gap-[40px] max-md:gap-[30px]">
        {sections.map((section) => (
          <div key={section.id} className="flex gap-[24px] max-lg:gap-[20px] max-md:flex-col max-md:gap-[8px]">
            <h2 className="w-[29%] max-w-[514px] shrink-0 font-[family-name:var(--font-roboto)] text-[clamp(0.875rem,0.94vw,1.125rem)] font-semibold leading-none uppercase text-[#333] max-lg:w-[39%] max-lg:max-w-[285px] max-lg:text-sm max-md:w-full max-md:max-w-none">
              {section.title}
            </h2>
            <div className="flex-1 min-w-0 font-[family-name:var(--font-roboto)] text-[clamp(0.875rem,1.09vw,1.3125rem)] font-normal leading-[1.15] text-[#333] max-lg:text-sm max-md:text-base">
              {section.paragraphs.map((p, i) => (
                <p key={i} className={i < section.paragraphs.length - 1 ? "mb-0" : ""}>
                  {p}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── All policy sections data ─── */
const sections = [
  {
    id: 1,
    title: "1. General Provisions",
    paragraphs: [
      `This policy of personal data processing is drawn up in accordance with the requirements of the Federal Law dated 27.07.2006. No. 152-FZ "On Personal Data" (hereinafter - the Personal Data Law) and defines the procedure of personal data processing and measures to ensure the security of personal data undertaken by "GREEN WORLD" LLC (hereinafter - the Operator).`,
      `1.1 The Operator sets as its most important goal and condition of its activity the observance of human and citizen's rights and freedoms during the processing of personal data, including the protection of the rights to privacy, personal and family secrecy.`,
      `1.2 This Operator's policy on personal data processing (hereinafter referred to as the Policy) applies to all information that the Operator may obtain about the visitors of the website https://greenworld.az.`,
    ],
  },
  {
    id: 2,
    title: "2. Basic concepts used in the Policy",
    paragraphs: [
      `2.1 Automated processing of personal data - processing of personal data by means of computer equipment.`,
      `2.2 Blocking of personal data - temporary cessation of personal data processing (except for cases when processing is necessary to clarify personal data).`,
      `2.3 Website - a set of graphic and informational materials, as well as computer programs and databases, ensuring their availability on the Internet at the network address https://greenworld.az.`,
      `2.4. Personal data information system - a set of personal data contained in databases and information technologies and technical means ensuring their processing.`,
      `2.5. Personal data depersonalization - actions as a result of which it is impossible to determine, without using additional information, whether personal data belong to a particular User or other subject of personal data.`,
      `2.6 Processing of personal data - any action (operation) or set of actions (operations) performed with the use of automation means or without the use of such means with personal data, including collection, recording, systematization, accumulation, storage, clarification (update, change), extraction, use, transfer (distribution, provision, access), depersonalization, blocking, deletion, destruction of personal data.`,
      `2.7. Operator - a state authority, municipal authority, legal entity or individual, independently or jointly with other persons organizing and/or carrying out processing of personal data, as well as determining the purposes of personal data processing, composition of personal data subject to processing, actions (operations) performed with personal data.`,
      `2.8 Personal Data - any information relating directly or indirectly to a specific or identifiable User of https://greenworld.az.`,
      `2.9. Personal data authorized by the subject of personal data for dissemination - personal data to which access to an unlimited number of persons is granted by the subject of personal data by giving consent to the processing of personal data authorized by the subject of personal data for dissemination in the manner prescribed by the Personal Data Law (hereinafter - personal data authorized for dissemination).`,
      `2.10. User - any visitor of the website https://greenworld.az.`,
      `2.11. Provision of personal data - actions aimed at disclosure of personal data to a certain person or a certain circle of persons.`,
      `2.12. Dissemination of personal data - any actions aimed at disclosure of personal data to an indefinite number of persons (transfer of personal data) or familiarization of personal data to an unlimited number of persons, including disclosure of personal data in mass media, placement in information and telecommunication networks or providing access to personal data in any other way.`,
      `2.13. Cross-border transfer of personal data - transfer of personal data to the territory of a foreign country to a foreign government authority, a foreign individual or a foreign legal entity.`,
      `2.14. Destruction of personal data - any actions, as a result of which personal data are irretrievably destroyed with the impossibility of further recovery of the content of personal data in the personal data information system and/or material carriers of personal data are destroyed.`,
    ],
  },
  {
    id: 3,
    title: "3. basic rights and obligations of the Operator",
    paragraphs: [
      `3.1 The Operator has the right to:`,
      `- to receive from the subject of personal data reliable information and/or documents containing personal data;`,
      `- in case the personal data subject revokes his/her consent to personal data processing, as well as if he/she submits a request to stop personal data processing, the Operator has the right to continue personal data processing without the consent of the personal data subject, if there are grounds specified in the Personal Data Law;`,
      `- independently determine the composition and list of measures necessary and sufficient to ensure the fulfillment of obligations stipulated by the Personal Data Law and regulatory legal acts adopted in accordance with it, unless otherwise provided by the Personal Data Law or other federal laws.`,
      `3.2 The Operator shall:`,
      `- provide the personal data subject, upon his/her request, with information regarding the processing of his/her personal data;`,
      `- organize the processing of personal data in accordance with the procedure established by the current legislation of the Russian Federation;`,
      `- respond to appeals and requests of personal data subjects and their legal representatives in accordance with the requirements of the Law on personal data;`,
      `- to inform the authorized body for the protection of the rights of personal data subjects at the request of this body the necessary information within 10 days from the date of receipt of such request;`,
      `- publish or otherwise provide unrestricted access to this Policy on personal data processing;`,
      `- take legal, organizational and technical measures to protect personal data from unlawful or accidental access to them, destruction, modification, blocking, copying, provision, dissemination of personal data, as well as from other unlawful actions with regard to personal data;`,
      `- cease transfer (dissemination, provision, access) of personal data, stop processing and destroy personal data in the manner and cases stipulated by the Personal Data Law;`,
      `- fulfill other obligations stipulated by the Personal Data Law.`,
    ],
  },
  {
    id: 4,
    title: "4. basic rights and obligations of personal data subjects",
    paragraphs: [
      `4.1 Personal data subjects have the right to:`,
      `- to receive information regarding the processing of his/her personal data, except for cases provided for by federal laws. Information shall be provided to the subject of personal data by the Operator in an accessible form and shall not contain personal data relating to other subjects of personal data, except in cases where there are legal grounds for disclosure of such personal data. The list of information and the procedure for obtaining it is established by the Law on Personal Data;`,
      `- demand from the operator to clarify his personal data, block or destroy it in case the personal data is incomplete, outdated, inaccurate, illegally obtained or not necessary for the stated purpose of processing, as well as to take measures provided by law to protect his rights;`,
      `- to impose the condition of prior consent when processing personal data in order to promote goods, works and services on the market;`,
      `- to withdraw consent to the processing of personal data, as well as to submit a request to stop the processing of personal data;`,
      `- to appeal to the authorized body for the protection of the rights of personal data subjects or in court against unlawful acts or omissions of the Operator in the processing of personal data;`,
      `- to exercise other rights provided for by the legislation of the Russian Federation.`,
      `4.2 The subjects of personal data shall be obliged to:`,
      `- provide the Operator with reliable data about themselves;`,
      `- notify the Operator about clarification (update, change) of their personal data.`,
      `4.3 Persons who have provided the Operator with false information about themselves or information about another subject of personal data without the consent of the latter shall be liable in accordance with the legislation of the Russian Federation.`,
    ],
  },
  {
    id: 5,
    title: "5. Principles of personal data processing",
    paragraphs: [
      `5.1 The processing of personal data is carried out on a lawful and fair basis.`,
      `5.2 The processing of personal data is limited to the achievement of specific, predetermined and legitimate purposes. Processing of personal data incompatible with the purposes of personal data collection is not allowed.`,
      `5.3 It is not allowed to merge databases containing personal data processed for incompatible purposes.`,
      `5.4 Only personal data that meet the purposes of their processing shall be processed.`,
      `5.5 The content and scope of processed personal data correspond to the stated purposes of processing. The redundancy of the processed personal data in relation to the stated purposes of their processing is not allowed.`,
      `5.6 When processing personal data, the accuracy of personal data, their sufficiency and, where necessary, relevance to the purposes of personal data processing shall be ensured. The Operator shall take the necessary measures and/or ensure that they are taken to delete or clarify incomplete or inaccurate data.`,
      `5.7 Storage of personal data is carried out in a form that allows to identify the subject of personal data, no longer than required by the purposes of personal data processing, unless the period of storage of personal data is established by federal law, contract, party to which, beneficiary or guarantor of which is the subject of personal data. Processed personal data shall be destroyed or depersonalized upon achievement of the purposes of processing or in case of loss of necessity to achieve these purposes, unless otherwise provided for by federal law.`,
    ],
  },
  {
    id: 6,
    title: "6. Purposes of personal data processing",
    paragraphs: [
      `Purpose of processing:`,
      `- informing the User by sending e-mails`,
      `Personal data:`,
      `- e-mail address`,
      `- company name`,
      `Legal basis:`,
      `- Federal Law "On Information, Information Technologies and Information Protection" dated 27.07.2006 N 149-FZ.`,
      `Types of personal data processing:`,
      `- sending newsletters to the e-mail address`,
    ],
  },
  {
    id: 7,
    title: "7. Conditions of personal data processing",
    paragraphs: [
      `7.1 The processing of personal data shall be carried out with the consent of the personal data subject to the processing of his/her personal data.`,
      `7.2 The processing of personal data is necessary to achieve the purposes provided for by the international treaty of the Russian Federation or by law, to fulfill the functions, powers and duties imposed on the operator by the legislation of the Russian Federation.`,
      `7.3 Processing of personal data is necessary for the administration of justice, execution of a judicial act, act of another body or official subject to execution in accordance with the legislation of the Russian Federation on enforcement proceedings.`,
      `7.4 The processing of personal data is necessary for the execution of an agreement to which the personal data subject is a party or a beneficiary or guarantor, as well as for the conclusion of an agreement at the initiative of the personal data subject or an agreement under which the personal data subject will be a beneficiary or guarantor.`,
      `7.5 The processing of personal data is necessary for the exercise of the rights and legitimate interests of the operator or third parties or for the achievement of socially important purposes, provided that the rights and freedoms of the personal data subject are not violated.`,
      `7.6 Processing of personal data to which the subject of personal data or at his/her request (hereinafter referred to as publicly available personal data) is granted access by an unlimited number of persons.`,
      `7.7 Processing of personal data subject to publication or mandatory disclosure in accordance with federal law.`,
    ],
  },
  {
    id: 8,
    title: "8. Procedure for collection, storage, transfer and other types of personal data processing",
    paragraphs: [
      `Security of personal data processed by the Operator is ensured by implementing legal, organizational and technical measures necessary for full compliance with the requirements of the applicable legislation in the field of personal data protection.`,
      `8.1 The Operator ensures the safety of personal data and takes all possible measures to exclude access to personal data by unauthorized persons.`,
      `8.2 The User's personal data will never, under no circumstances, be transferred to third parties, except in cases related to the execution of the current legislation or if the subject of personal data has given consent to the Operator to transfer the data to a third party for the fulfillment of obligations under a civil law contract.`,
      `8.3 If any inaccuracies in the personal data are detected, the User may update them independently by sending a notice to the Operator to the Operator's e-mail address info@greenworld.az with the remark "Personal Data Update".`,
      `8.4 The term of personal data processing is determined by the achievement of the purposes for which the personal data were collected, unless another term is stipulated by the contract or applicable law.`,
      `The User may withdraw his/her consent to the processing of personal data at any time by sending a notice to the Operator by e-mail to the Operator's e-mail address info@greenworld.az marked "Withdrawal of consent to the processing of personal data".`,
      `8.5 All information that is collected by third-party services, including payment systems, means of communication and other service providers, is stored and processed by the specified persons (Operators) in accordance with their User Agreement and Privacy Policy. Personal Data Subject and/or with the said documents. The Operator is not responsible for the actions of third parties, including the service providers specified in this paragraph.`,
      `8.6 The prohibitions established by the personal data subject on the transfer (except for granting access), as well as on the processing or conditions of processing (except for access) of personal data authorized for dissemination shall not apply in cases of personal data processing in the state, public and other public interests defined by the legislation of the Russian Federation.`,
      `8.7 The Operator shall ensure confidentiality of personal data when processing personal data.`,
      `8.8 The Operator shall store personal data in a form that allows to identify the subject of personal data for no longer than required for the purposes of personal data processing, unless the period of personal data storage is established by federal law, contract to which the subject of personal data is a party, beneficiary or guarantor.`,
      `8.9 The condition for termination of personal data processing may be the achievement of the purposes of personal data processing, expiration of the personal data subject's consent, withdrawal of consent by the personal data subject or the requirement to terminate personal data processing, as well as the detection of unlawful processing of personal data.`,
    ],
  },
  {
    id: 9,
    title: "9. List of actions performed by the Operator with the received personal data",
    paragraphs: [
      `9.1 The Operator shall collect, record, systematize, accumulate, store, clarify (update, change), extract, use, transfer (disseminate, provide, access), depersonalize, block, delete and destroy personal data.`,
      `9.2 The Operator performs automated processing of personal data with or without receiving and/or transmitting the received information via information and telecommunication networks.`,
    ],
  },
  {
    id: 10,
    title: "10. Cross-border transfer of personal data",
    paragraphs: [
      `10.1 Prior to commencement of transborder transfer of personal data, the Operator shall notify the authorized body for the protection of the rights of personal data subjects of its intention to carry out transborder transfer of personal data (such notification shall be sent separately from the notification of intention to process personal data).`,
      `10.2 Before submitting the above notification, the Operator shall be obliged to obtain relevant information from foreign authorities, foreign natural persons, foreign legal entities to whom transborder transfer of personal data is planned.`,
    ],
  },
  {
    id: 11,
    title: "11. Confidentiality of personal data",
    paragraphs: [
      `The operator and other persons who have access to personal data are obliged not to disclose to third parties and not to disseminate personal data without the consent of the subject of personal data, unless otherwise provided for by federal law.`,
    ],
  },
  {
    id: 12,
    title: "12. Final provisions",
    paragraphs: [
      `12.1. The User may obtain any clarifications on issues of interest regarding the processing of his/her personal data by contacting the Operator via e-mail at info@greenworld.az.`,
      `12.2. This document will reflect any changes in the policy of personal data processing by the Operator. The Policy is valid indefinitely until it is replaced by a new version.`,
      `12.3. The current version of the Policy is freely available on the Internet at https://greenworld.az/privacy.`,
    ],
  },
];
