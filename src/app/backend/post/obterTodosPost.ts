'use server';

import RepositorioPost from './RepositorioPosts';

export default async function obterTodos() {
    return RepositorioPost.obterTodos();
}
