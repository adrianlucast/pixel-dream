type MaybeNew<T extends { id: string; }> = Omit<T, 'id'> & { id?: string; };

export default MaybeNew;

