import style from "../cadastrar-produto.module.scss";

export default function DadosEstoque({ formik }) {
  return (
    <>
      <div className={style.container__ContainerForm_title}>
        <h1>Informações do Produto</h1>
      </div>
      <div className={style.container__ContainerForm_form_halfContainer}>
        <div>
          <label htmlFor="produto.nameProduct">Nome do Produto<span>*</span></label>
          <input
            className={style.container__ContainerForm_form_halfContainer_input}
            id="produto.nameProduct"
            name="produto.nameProduct"
            placeholder="Insira o nome do produto"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.produto.nameProduct}
            required
          />
          {formik.touched.produto?.nameProduct && formik.errors.produto?.nameProduct ? (
            <span className={style.form__error}>{formik.errors.produto.nameProduct}</span>
          ) : null}
        </div>

        <div>
          <label htmlFor="produto.brandProduct">Nome da Marca<span>*</span></label>
          <input
            className={style.container__ContainerForm_form_halfContainer_input}
            id="produto.brandProduct"
            name="produto.brandProduct"
            placeholder="Insira o nome da marca"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.produto.brandProduct}
          />
          {formik.touched.produto?.brandProduct && formik.errors.produto?.brandProduct ? (
            <span className={style.form__error}>{formik.errors.produto.brandProduct}</span>
          ) : null}
        </div>

        <div>
          <label htmlFor="produto.priceProduct">Valor <span>*</span></label>
          <input
            className={style.container__ContainerForm_form_halfContainer_input}
            id="produto.priceProduct"
            name="produto.priceProduct"
            type="number"
            placeholder="Insira o valor Ex: R$ 10.00"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.produto.priceProduct}
            required
          />
          {formik.touched.produto?.priceProduct && formik.errors.produto?.priceProduct ? (
            <span className={style.form__error}>{formik.errors.produto.priceProduct}</span>
          ) : null}
        </div>

        <div>
          <label htmlFor="produto.size">Peso<span>*</span></label>
          <input
            className={style.container__ContainerForm_form_halfContainer_input}
            id="produto.size"
            name="produto.size"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.produto.size}
            required
          />
          {formik.touched.produto?.size && formik.errors.produto?.size ? (
            <span className={style.form__error}>{formik.errors.produto.size}</span>
          ) : null}
        </div>
      </div>
      <div className={style.container__ContainerForm_form_oneContainer}>
        <div>
          <label htmlFor="produto.descriptionProduct">Descrição <span>*</span></label>
          <input
            className={style.container__ContainerForm_form_halfContainer_input}
            id="produto.descriptionProduct"
            name="produto.descriptionProduct"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.produto.description}
            required
          />
          {formik.touched.produto?.descriptionProduct && formik.errors.produto?.descriptionProduct ? (
            <span className={style.form__error}>{formik.errors.produto.descriptionProduct}</span>
          ) : null}
        </div>
      </div>
    </>
  );
}
