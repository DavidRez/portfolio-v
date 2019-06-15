//create and update gallery
function showGallery() {
  const container = document.getElementById('container');
  const work = document.createElement('div');
  work.setAttribute('class','work');
  container.append(work)

  //setting gallery up
  gallery.forEach(piece => {
    if (currentCategory === 'all' || piece.datatype === currentCategory) {
      let project = projects[piece.url];//data for each piece in gallery

      //CREATE GALLERY
      const box = document.createElement('div');
      box.setAttribute('class','box');
      box.setAttribute('data-type', piece.datatype);

      //add image
      const img = document.createElement('img');
      img.src = piece.mainImage;
      img.setAttribute('alt', piece.title);
      box.append(img);

      //add title
      const title = document.createElement('div');
      title.setAttribute('class','worktitle');
      title.textContent = piece.title;
      box.append(title);

      //add work type
      const type = document.createElement('div');
      type.setAttribute('class','type');
      type.textContent = piece.type;
      box.append(type);

      //add overlay
      const a = document.createElement('a');
      a.href = `#${piece.url}`;
      const overlay = document.createElement('div');
      overlay.setAttribute('class','overlay');
      overlay.setAttribute('name', piece.url);
      a.append(overlay);
      box.append(a);

      work.append(box);

      //CREATE LIGHTBOX
      const lightbox = document.createElement('div');
      lightbox.setAttribute('class','lightbox');
      lightbox.setAttribute('id', piece.url);
      lightbox.setAttribute('onclick',`location.href='#_'`);
      
      const showcase = document.createElement('div');
      showcase.setAttribute('class','showcase');
      
      const infoBlock = document.createElement('div');
      infoBlock.setAttribute('class','info_block');

      const titlePiece = document.createElement('div');
      titlePiece.setAttribute('class','title_piece');
      titlePiece.textContent = project.title;
      infoBlock.append(titlePiece);

      const tech = document.createElement('div');
      tech.setAttribute('class','tech');
      tech.textContent = project.tech;
      infoBlock.append(tech);

      const description = document.createElement('div');
      description.setAttribute('class','description');
      description.textContent = project.description;
      infoBlock.append(description);

      if(project.link) {
        const link = document.createElement('div');
        link.setAttribute('class','links');

        const projectLink = document.createElement('a');
        projectLink.href = project.link;
        project.target = '_blank';
        projectLink.textContent = '> Link to code';

        link.append(projectLink);
        infoBlock.append(link);
      }

      showcase.append(infoBlock);

      const imageBlock = document.createElement('div');
      imageBlock.setAttribute('class','image_block');  
      
      project.images.forEach(image => {
        const projectImage = document.createElement('img')
        projectImage.src = image;
        projectImage.alt = project.title;
        imageBlock.append(projectImage);
      });

      showcase.append(imageBlock);
      lightbox.append(showcase);
      work.append(lightbox);
    }
  });
}

showGallery();


