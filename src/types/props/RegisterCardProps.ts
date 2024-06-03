export type RegisterCardProps = {
  onConfirmed?: () => Promise<void>;
  emailValue: string;
  setEmailValue: (value: string) => void;
  passwordValue: string;
  setPasswordValue: (value: string) => void;
  repeatPasswordValue: string;
  setRepeatPasswordValue: (value: string) => void;
}