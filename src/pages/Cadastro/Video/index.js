import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForms';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const { handleChange, formValues } = useForm({
    titulo: 'titulo padrão',
    url: 'https://www.youtube.com/watch?v=mRRQcTZ1vj0',
    categoria: 'Front End',
  });
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);

  function handleSubmit(event) {
    event.preventDefault();
    const categoriaEscolhida = categorias.find((categoria) => (
      categoria.titulo === formValues.categoria
    ));

    videosRepository.create({
      titulo: formValues.titulo,
      url: formValues.url,
      categoriaId: categoriaEscolhida.id,
    }).then(() => {
      history.push('/');
    });
  }

  useEffect(() => {
    categoriasRepository.getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Vídeo</h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Título do Vídeo"
          type="text"
          name="titulo"
          value={formValues.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL do Vídeo"
          type="text"
          name="url"
          value={formValues.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          type="text"
          name="categoria"
          value={formValues.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
