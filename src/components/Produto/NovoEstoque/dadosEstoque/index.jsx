import style from "../cadastrar-produto.module.scss";

export default function DadosProduto({ formik }) {
  return (
    <>
      <div className={style.container__ContainerForm_title}>
        <h1>Estoque</h1>
      </div>
      <div className={style.container__ContainerForm_form_halfContainer}>
        <div>
          <label htmlFor="batch">Lote<span>*</span></label>
          <input
            className={style.container__ContainerForm_form_halfContainer_input}
            id="batch"
            name="batch"
            placeholder="Insira o código do lote"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.batch}
          />
          {formik.touched.batch && formik.errors.batch ? (
            <span className={style.form__error}>{formik.errors.batch}</span>
          ) : null}
        </div>
        <div>
          <label htmlFor="quantity">Quantidade<span>*</span></label>
          <input
            className={style.container__ContainerForm_form_halfContainer_input}
            id="quantity"
            name="quantity"
            type="number"
            placeholder="Quantidade do produto"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.quantity}
            required
          />
          {formik.touched.quantity && formik.errors.quantity ? (
            <span className={style.form__error}>{formik.errors.quantity}</span>
          ) : null}
        </div>

        <div>
          <label htmlFor="acquisitionDate">Data da compra <span>*</span></label>
          <input
            className={style.container__ContainerForm_form_halfContainer_input}
            id="acquisitionDate"
            name="acquisitionDate"
            type="date"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.acquisitionDate}
            required
          />
          {formik.touched.acquisitionDate && formik.errors.acquisitionDate ? (
            <span className={style.form__error}>{formik.errors.acquisitionDate}</span>
          ) : null}
        </div>

        <div>
          <label htmlFor="expirationDate">Data de validade <span>*</span></label>
          <input
            className={style.container__ContainerForm_form_halfContainer_input}
            id="expirationDate"
            name="expirationDate"
            type="date"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.expirationDate}
            required
          />
          {formik.touched.expirationDate && formik.errors.expirationDate ? (
            <span className={style.form__error}>{formik.errors.expirationDate}</span>
          ) : null}
        </div>
      </div>
    </>
  );
}
