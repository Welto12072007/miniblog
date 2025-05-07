const posts = [
    {
      id: 1,
      title: "5 Dicas para Criar um Blog de Sucesso",
      date: "07/05/2025",
      image: "https://source.unsplash.com/400x300/?blog,success",
      content: "Descubra como planejar, criar e divulgar um blog que atrai leitores..."
    },
    {
      id: 2,
      title: "Tendências de Design para 2025",
      date: "06/05/2025",
      image: "https://source.unsplash.com/400x300/?design,trends",
      content: "Veja o que estará em alta no design web e como aplicar no seu projeto."
    },
    {
      id: 3,
      title: "Como Monetizar seu Blog",
      date: "05/05/2025",
      image: "https://source.unsplash.com/400x300/?money,blogging",
      content: "Aprenda formas práticas e éticas de ganhar dinheiro com conteúdo online."
    }
  ];
  
  localStorage.setItem('posts', JSON.stringify(posts));
  
  const container = document.getElementById('posts-container');
  posts.forEach(post => {
    const div = document.createElement('div');
    div.className = 'col-md-4';
    div.innerHTML = `
      <div class="card h-100 shadow-sm">
        <img src="${post.image}" class="card-img-top" alt="${post.title}">
        <div class="card-body">
          <h5 class="card-title">${post.title}</h5>
          <p class="text-muted">${post.date}</p>
          <a href="post.html?id=${post.id}" class="btn btn-primary btn-sm">Ler mais</a>
        </div>
      </div>
    `;
    container.appendChild(div);
  });
  