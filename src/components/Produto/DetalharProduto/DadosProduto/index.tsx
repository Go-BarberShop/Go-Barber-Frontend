"use client"
import style from "./produto.module.scss";

interface DadosProdutoProps {
    formik: any;
    editar: boolean;
    hrefAnterior: string;
    }

const DadosProduto: React.FC<DadosProdutoProps> = ({ formik, editar }) => {


  return (
    <>
        {editar === false ? (
              <div>
                <div className={style.container__ContainerForm_form_halfContainer}>
                  <div>
                    <label htmlFor="nameProduct">Nome</label>
                    <input
                      id="nameProduct"
                      className={style.container__ContainerForm_form_input}
                      name="nameProduct"
                      placeholder="Não informado"
                      onBlur={formik.h1andleBlur}
                      value={formik.values.nameProduct}
                      disabled
                    />
                  </div>
                  <div>
                    <label htmlFor="brandProduct">Nome da Marca </label>
                    <input
                      id="brandProduct"
                      className={style.container__ContainerForm_form_input}
                      name="brandProduct"
                      placeholder="Não informado"
                      onBlur={formik.handleBlur}
                      value={formik.values.brandProduct}
                      disabled
                    />
                  </div>
                  <div>
                    <label htmlFor="priceProduct">Valor</label>
                    <input
                      id="priceProduct"
                      className={style.container__ContainerForm_form_input}
                      name="priceProduct"
                      placeholder="Não informado"
                      onBlur={formik.handleBlur}
                      value={formik.values.priceProduct}
                      disabled
                    />
                  </div>
                
                  <div>
                    <label htmlFor="size">Peso</label>
                    <input
                      id="size"
                      className={style.container__ContainerForm_form_input}
                      name="size"
                      placeholder="Não informado"
                      value={formik.values.size}
                      disabled
                    />
                  </div>
                </div>

                <div className={style.container__ContainerForm_form_oneContainer}>
                  <div>
                    <label htmlFor="descriptionProduct">Descrição </label>
                    <input
                      id="descriptionProduct"
                      className={style.container__ContainerForm_form_oneContainer_input}
                      name="descriptionProduct"
                      placeholder="Não informado"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.descriptionProduct}
                      disabled
                    />
                  </div>

                </div>
            </div>
        ) : (
          <div>
              <div className={style.container__ContainerForm_form_halfContainer}>
                <div>
                  <label htmlFor="nameProduct">Nome</label>
                  <input
                    className={style.container__ContainerForm_form_input}
                    id="nameProduct"
                    name="nameProduct"
                    placeholder={formik.values.nameProduct}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.nameProduct}
                    required
                  />
                </div>
                {formik.touched.nameProduct && formik.errors.nameProduct ? (
                    <span className={style.form__error}>{formik.errors.nameProduct}</span>
                  ) : null}

                <div>
                  <label htmlFor="brandProduct">Nome da Marca</label>
                  <input
                    className={style.container__ContainerForm_form_input}
                    id="brandProduct"
                    name="brandProduct"
                    placeholder={formik.values.startDate}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.brandProduct}
                    required
                  />
                  {formik.touched.brandProduct && formik.errors.brandProduct ? (
                    <span className={style.form__error}>{formik.errors.brandProduct}</span>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="priceProduct">Valor</label>
                  <input
                    className={style.container__ContainerForm_form_input}
                    id="priceProduct"
                    name="priceProduct"
                    placeholder={formik.values.priceProduct}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.priceProduct}
                    required
                  />
                </div>
                {formik.touched.priceProduct && formik.errors.priceProduct ? (
                    <span className={style.form__error}>{formik.errors.priceProduct}</span>
                  ) : null}
                <div>
                  <label htmlFor="size">Peso </label>
                  <input
                    className={style.container__ContainerForm_form_input}
                    id="size"
                    name="size"
                    placeholder={formik.values.endDate}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.size}
                    required
                  />
                  {formik.touched.size && formik.errors.size ? (
                    <span className={style.form__error}>{formik.errors.size}</span>
                  ) : null}
                </div>
              </div>
              <div className={style.container__ContainerForm_form_oneContainer}>
                <div>
                  <label htmlFor="descriptionProduct">Descrição</label>
                  <input
                    className={style.container__ContainerForm_form_input}
                    id="descriptionProduct"
                    name="descriptionProduct"
                    placeholder={formik.values.descriptionProduct}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.descriptionProduct}
                    required
                  />
                </div>
                {formik.touched.descriptionProduct && formik.errors.descriptionProduct ? (
                    <span className={style.form__error}>{formik.errors.descriptionProduct}</span>
                  ) : null}
                </div>
            </div>
        )}

    </>
  )
}


export default DadosProduto;