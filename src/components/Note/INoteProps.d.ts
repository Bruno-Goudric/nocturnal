type NoteProps = {
  content: string;
  createdAt: string;
  id: string;
  title: string;
  updatedAt: string;
};

interface NoteProp {
  entries?: Array<NoteProps>;
}

export default NoteProp;
