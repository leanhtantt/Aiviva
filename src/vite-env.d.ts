/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GOOGLE_CONTACT_FORM_ID?: string;
  readonly VITE_GOOGLE_CONTACT_FULL_NAME_ENTRY?: string;
  readonly VITE_GOOGLE_CONTACT_EMAIL_ENTRY?: string;
  readonly VITE_GOOGLE_CONTACT_PHONE_ENTRY?: string;
  readonly VITE_GOOGLE_CONTACT_INQUIRY_TYPE_ENTRY?: string;
  readonly VITE_GOOGLE_CONTACT_MESSAGE_ENTRY?: string;
  readonly VITE_GOOGLE_CONTACT_LANGUAGE_ENTRY?: string;
  readonly VITE_GOOGLE_CONTACT_PAGE_URL_ENTRY?: string;
  readonly VITE_GOOGLE_CONTACT_UTM_SOURCE_ENTRY?: string;
  readonly VITE_GOOGLE_CONTACT_UTM_MEDIUM_ENTRY?: string;
  readonly VITE_GOOGLE_CONTACT_UTM_CAMPAIGN_ENTRY?: string;

  readonly VITE_GOOGLE_SUBSCRIBE_FORM_ID?: string;
  readonly VITE_GOOGLE_SUBSCRIBE_EMAIL_ENTRY?: string;
  readonly VITE_GOOGLE_SUBSCRIBE_LANGUAGE_ENTRY?: string;
  readonly VITE_GOOGLE_SUBSCRIBE_SOURCE_ENTRY?: string;
  readonly VITE_GOOGLE_SUBSCRIBE_PAGE_URL_ENTRY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
