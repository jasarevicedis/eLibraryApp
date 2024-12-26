import { Book } from "./Book";
import { LoanStatus } from "./LoanStatus";
import { User } from "./User";

export interface Loan {
    id: String;
    user: User;
    book: Book;
    loanDate: Date;
    status: LoanStatus;
}