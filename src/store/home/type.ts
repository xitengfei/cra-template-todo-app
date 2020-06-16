import ToDo from '@/models/ToDo';

export default interface Home{
    title: string,
    todos: Array<ToDo>
}