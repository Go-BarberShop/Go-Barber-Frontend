import style from "../cadastrar-produto.module.scss";


export default function DadosProduto({ formik }) {

  return (
    <>
        <div className={style.container__ContainerForm_title} >
            <h1>
                Informações do Produto
            </h1>
        </div>
      <div className={style.container__ContainerForm_form_halfContainer}>

        <div>
            <label htmlFor="name">Nome do Produto<span>*</span></label>
            <input
                className={style.container__ContainerForm_form_halfContainer_input}
                id="name"
                name="name"
                placeholder="Insira o nome do produto"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                required />
            {formik.touched.name && formik.errors.name ? (
                <span className={style.form__error}>{formik.errors.name}</span>
            ) : null}
        </div>

        <div>
            <label htmlFor="brand">Nome da Marca<span>*</span></label>
            <input
                className={style.container__ContainerForm_form_halfContainer_input}
                id="brand"
                name="brand"
                placeholder="Insira o código do cupom"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.brand}
                />
            {formik.touched.brand && formik.errors.brand ? (
                <span className={style.form__error}>{formik.errors.brand}</span>
            ) : null}
        </div>
      <div>
        <label htmlFor="price">Valor <span>*</span></label>
            <input
                className={style.container__ContainerForm_form_halfContainer_input}
                id="price"
                name="price"
                type="number"
                placeholder="Insira o valor  Ex: R$ 10.00"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.price}
                required />
            {formik.touched.price && formik.errors.price ? (
                <span className={style.form__error}>{formik.errors.price}</span>
            ) : null}
        </div>
        <div>
        <label htmlFor="size">Peso<span>*</span></label>
            <input
                className={style.container__ContainerForm_form_halfContainer_input}
                id="size"
                name="size"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.size}
                required />
            {formik.touched.size && formik.errors.size ? (
                <span className={style.form__error}>{formik.errors.size}</span>
            ) : null}
        </div>
      </div>
        <div className={style.container__ContainerForm_form_oneContainer}>

            <div>
                <label htmlFor="description">Descrição <span>*</span></label>
                <input
                    className={style.container__ContainerForm_form_halfContainer_input}
                    id="description"
                    name="description"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.description}
                    required />
                {formik.touched.description && formik.errors.description ? (
                    <span className={style.form__error}>{formik.errors.description}</span>
                ) : null}
            </div>
        </div>


    </>

  )
}