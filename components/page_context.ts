import { createContext } from 'react';

export const PageContext = createContext({
    section: 'landing',
    section_choices: [],
    set_section: null,
});