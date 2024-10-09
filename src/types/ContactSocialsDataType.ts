export type ContactItemType = {
  type: string;
  text: string;
  link: string;
  icon: string;
  targetBlank: boolean;
};

export type SocialItemType = {
  name: string;
  icon: string;
  alt: string;
  link: string;
};

export type ContactDataType = {
  contact: ContactItemType[];
  socials: SocialItemType[];
};
