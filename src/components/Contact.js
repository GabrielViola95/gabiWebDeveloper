import { useForm } from "../hooks/useForm"
import Loader from "./Loader";
import Message from "./Message";

const initialForm = {
  name: "",
  email: "",
  comments: "",
};

const validationsForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,255}$/;

  if(!form.name.trim()){
    errors.name = "El campo 'Nombre' es requerido";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "El campo 'Nombre' solo acepta letras y espacios en blanco";
  }
  if(!form.email.trim()){
    errors.email = "El campo 'E-mail' es requerido";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El campo 'E-mail' es incorrecto";
  }
  if(!form.comments.trim()){
    errors.comments = "El campo 'Comentarios' es requerido";
  } else if (!regexComments.test(form.comments.trim())) {
    errors.comments = "El campo 'Comentarios' acepta hasta 255 caracteres";
  }

  return errors;
};

let styles ={
  fontWeight: "bold",
  color: "#dc3545",
};

const Contact = () => {
  const {form, errors, loading, response, handleChange, handleBlur, handleSubmit} = useForm(initialForm, validationsForm);

  return (
    <section className="contact section" id="contact">
            <h2 className="section-title">Contacto</h2>

            <div className="contact__container bd-grid">
                <form action="" className="contact_form" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Nombre" name="name" className="contact__input" 
                    onBlur={handleBlur} 
                    onChange={handleChange} value={form.name} required />
                    {errors.name && <p style={styles}>{errors.name}</p>}
                    <input type="mail" name="email" placeholder="E-mail" className="contact__input" onBlur={handleBlur} onChange={handleChange} value={form.email} required/>
                    {errors.email && <p style={styles}>{errors.email}</p>}
                    <textarea name="comments" id="" cols="0" rows="10" className="contact__input" placeholder="Escribe tu comentario" onBlur={handleBlur} onChange={handleChange} value={form.comments} required></textarea>
                    {errors.comments && <p style={styles}>{errors.comments}</p>}
                    <input type="submit" value="Enviar" className="contact__button button"/>
                </form>
                {loading && <Loader/>}
                {response && <Message msg="Los datos han sido enviados" bgColor="#198754" />}
            </div>
        </section>
  )
}

export default Contact;