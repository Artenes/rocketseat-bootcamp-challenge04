class Api {

  fetchPosts() {
    return [

      {id: 1,
        author: {
          name: 'Julio Alcantara',
          avatar: 'https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_960_720.png'
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_960_720.png'
            },
            content: "Conteúdo do comentário"
          }
        ],
      },
      {id: 2,
        author: {
          name: 'Julio Alcantara',
          avatar: 'https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_960_720.png'
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_960_720.png'
            },
            content: "Conteúdo do comentário"
          }
        ],
      },
      {id: 3,
        author: {
          name: 'Julio Alcantara',
          avatar: 'https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_960_720.png'
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_960_720.png'
            },
            content: "Conteúdo do comentário"
          }
        ],
      },
      {id: 4,
        author: {
          name: 'Julio Alcantara',
          avatar: 'https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_960_720.png'
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_960_720.png'
            },
            content: "Conteúdo do comentário"
          }
        ],
      },

    ];
  }

}

export default new Api();