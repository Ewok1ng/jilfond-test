import { DetailedHTMLProps, HTMLAttributes } from 'react';
export default interface ResultItemProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    name: string;
    email: string;
    userId: number;
}
