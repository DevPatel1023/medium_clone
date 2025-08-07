export type AuthProps = {
    type : "signup" | "signin",
    inputs :  {
        username? : string;
        email : string;
        password : string;
    }
    setInputs : React.Dispatch<React.SetStateAction<any>>;
    onSubmit : (e: React.FormEvent) => void;
}