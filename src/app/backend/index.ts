import salvarLead from "./lead/salvarLeads"
import obterTodos from "./lead/obterTodos"
import salvarPost from "./post/salvarPosts"
import obterTodosPost from "./post/obterTodosPost"

export default class Backend {
    static readonly leads = {
        salvar: salvarLead, 
        obter: obterTodos,
    }

    static readonly posts = {
        salvar: salvarPost,
        obter: obterTodosPost,
    };
}