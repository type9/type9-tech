import { createContext } from 'react';

export const PageContext = createContext({
    section: 'Home',
    section_choices: [],
    set_section: null,
});