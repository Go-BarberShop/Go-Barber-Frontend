import style from "../cadastrar-promocao.module.scss";


export default function DadosPromocao({ formik }) {

  return (
    <>
        <div className={style.container__ContainerForm_title} >
            <h1>
                Informações da promoção
            </h1>
        </div>
      <div className={style.container__ContainerForm_form_halfContainer}>

        <div>
            <label htmlFor="name">Nome da Promoção<span>*</span></label>
            <input
                className={style.container__ContainerForm_form_halfContainer_input}
                id="name"
                name="name"
                placeholder="Insira o nome da promoção"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                required />
            {formik.touched.name && formik.errors.name ? (
                <span className={style.form__error}>{formik.errors.name}</span>
            ) : null}
        </div>

        <div>
            <label htmlFor="coupon">Código do Cupom</label>
            <input
                className={style.container__ContainerForm_form_halfContainer_input}
                id="coupon"
                name="coupon"
                placeholder="Insira o código do cupom"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.coupon}
                />
            {formik.touched.coupon && formik.errors.coupon ? (
                <span className={style.form__error}>{formik.errors.coupon}</span>
            ) : null}
        </div>
      </div>
      <div className={style.container__ContainerForm_form_threePartsContainer}>

      <div>
        <label htmlFor="totalPrice">Valor <span>*</span></label>
            <input
                className={style.container__ContainerForm_form_halfContainer_input}
                id="totalPrice"
                name="totalPrice"
                type="number"
                placeholder="Insira o valor promocional Ex: R$ 10.00"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.totalPrice}
                required />
            {formik.touched.totalPrice && formik.errors.totalPrice ? (
                <span className={style.form__error}>{formik.errors.totalPrice}</span>
            ) : null}
        </div>
        <div>
        <label htmlFor="startDate">Data Inicio<span>*</span></label>
            <input
                className={style.container__ContainerForm_form_halfContainer_input}
                id="startDate"
                name="startDate"
                type="date"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.startDate}
                required />
            {formik.touched.startDate && formik.errors.startDate ? (
                <span className={style.form__error}>{formik.errors.startDate}</span>
            ) : null}
        </div>

        <div>
            <label htmlFor="endDate">Data Fim <span>*</span></label>
            <input
                className={style.container__ContainerForm_form_halfContainer_input}
                id="endDate"
                name="endDate"
                type="date"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.endDate}
                required />
            {formik.touched.endDate && formik.errors.endDate ? (
                <span className={style.form__error}>{formik.errors.endDate}</span>
            ) : null}
        </div>
        </div>

    </>

  )
}