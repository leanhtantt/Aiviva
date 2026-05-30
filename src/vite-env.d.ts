/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GOOGLE_CONTACT_FORM_ID?: string;
  readonly VITE_GOOGLE_CONTACT_ENTRY_NAME?: string;
  readonly VITE_GOOGLE_CONTACT_ENTRY_EMAIL?: string;
  readonly VITE_GOOGLE_CONTACT_ENTRY_PHONE?: string;
  readonly VITE_GOOGLE_CONTACT_ENTRY_TYPE?: string;
  readonly VITE_GOOGLE_CONTACT_ENTRY_MESSAGE?: string;
  readonly VITE_GOOGLE_CONTACT_ENTRY_LANG?: string;
  readonly VITE_GOOGLE_CONTACT_ENTRY_PAGE?: string;
  readonly VITE_GOOGLE_CONTACT_ENTRY_UTM_SOURCE?: string;
  readonly VITE_GOOGLE_CONTACT_ENTRY_UTM_MEDIUM?: string;
  readonly VITE_GOOGLE_CONTACT_ENTRY_UTM_CAMPAIGN?: string;

  readonly VITE_GOOGLE_SUBSCRIBE_FORM_ID?: string;
  readonly VITE_GOOGLE_SUBSCRIBE_ENTRY_EMAIL?: string;
  readonly VITE_GOOGLE_SUBSCRIBE_ENTRY_LANG?: string;
  readonly VITE_GOOGLE_SUBSCRIBE_ENTRY_SOURCE?: string;
  readonly VITE_GOOGLE_SUBSCRIBE_ENTRY_PAGE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
