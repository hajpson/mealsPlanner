export type LoginCardProps = {
  onConfirmed?: () => Promise<void>;
  emailValue: string;
  setEmailValue: (value: string) => void;
  passwordValue: string;
  setPasswordValue: (value: string) => void;
};
