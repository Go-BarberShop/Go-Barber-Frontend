import style from "../cadastrar-produto.module.scss";

export default function DadosProduto({ formik }) {
  return (
    <>
      <div className={style.container__ContainerForm_title}>
        <h1>Estoque</h1>
      </div>
      <div className={style.container__ContainerForm_form_halfContainer}>
        <div>
          <label htmlFor="estoque.batch">Lote<span>*</span></label>
          <input
            className={style.container__ContainerForm_form_halfContainer_input}
            id="estoque.batch"
            name="estoque.batch"
            placeholder="Insira o código do lote"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.estoque.batch}
          />
          {formik.touched.estoque?.batch && formik.errors.estoque?.batch ? (
            <span className={style.form__error}>{formik.errors.estoque.batch}</span>
          ) : null}
        </div>
        <div>
          <label htmlFor="estoque.quantity">Quantidade<span>*</span></label>
          <input
            className={style.container__ContainerForm_form_halfContainer_input}
            id="estoque.quantity"
            name="estoque.quantity"
            type="number"
            placeholder="Quantidade do produto"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.estoque.quantity}
            required
          />
          {formik.touched.estoque?.quantity && formik.errors.estoque?.quantity ? (
            <span className={style.form__error}>{formik.errors.estoque.quantity}</span>
          ) : null}
        </div>

        <div>
          <label htmlFor="estoque.acquisitionDate">Data da compra <span>*</span></label>
          <input
            className={style.container__ContainerForm_form_halfContainer_input}
            id="estoque.acquisitionDate"
            name="estoque.acquisitionDate"
            type="date"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.estoque.acquisitionDate}
            required
          />
          {formik.touched.estoque?.acquisitionDate && formik.errors.estoque?.acquisitionDate ? (
            <span className={style.form__error}>{formik.errors.estoque.acquisitionDate}</span>
          ) : null}
        </div>

        <div>
          <label htmlFor="estoque.expirationDate">Data de validade <span>*</span></label>
          <input
            className={style.container__ContainerForm_form_halfContainer_input}
            id="estoque.expirationDate"
            name="estoque.expirationDate"
            type="date"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.estoque.expirationDate}
            required
          />
          {formik.touched.estoque?.expirationDate && formik.errors.estoque?.expirationDate ? (
            <span className={style.form__error}>{formik.errors.estoque.expirationDate}</span>
          ) : null}
        </div>
      </div>
    </>
  );
}
