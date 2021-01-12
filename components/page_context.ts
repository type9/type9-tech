import {createContext, useContext} from 'react';

export type PageContextType ={
    section: number;
    section_choices: Array<string>;
    set_section: (section: number) => void;
    navigate_to: (section: number) => void;
}
export const PageContext = createContext<PageContextType>({
    section: 0,
    section_choices: [],
    set_section: section => console.warn('no section provider'),
    navigate_to: section => console.warn('no navigation provider'),
});