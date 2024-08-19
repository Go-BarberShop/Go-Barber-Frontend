"use client"
import style from "./produto.module.scss";

interface DadosProdutoProps {
    formik: any;
    editar: boolean;
    hrefAnterior: string;
    }

const DadosPromocao: React.FC<DadosProdutoProps> = ({ formik, editar }) => {


  return (
    <>
        {editar === false ? (
              <div>
                <div className={style.container__ContainerForm_form_halfContainer}>
                  <div>
                    <label htmlFor="name">Nome</label>
                    <input
                      id="name"
                      className={style.container__ContainerForm_form_input}
                      name="name"
                      placeholder="Não informado"
                      onBlur={formik.h1andleBlur}
                      value={formik.values.name}
                      disabled
                    />
                  </div>
                  <div>
                    <label htmlFor="brand">Nome da Marca </label>
                    <input
                      id="brand"
                      className={style.container__ContainerForm_form_input}
                      name="brand"
                      placeholder="Não informado"
                      onBlur={formik.handleBlur}
                      value={formik.values.brand}
                      disabled
                    />
                  </div>
                  <div>
                    <label htmlFor="price">Valor</label>
                    <input
                      id="price"
                      className={style.container__ContainerForm_form_input}
                      name="price"
                      placeholder="Não informado"
                      onBlur={formik.handleBlur}
                      value={formik.values.price}
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
                    <label htmlFor="description">Descrição </label>
                    <input
                      id="description"
                      className={style.container__ContainerForm_form_oneContainer_input}
                      name="description"
                      placeholder="Não informado"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.description}
                      disabled
                    />
                  </div>

                </div>
            </div>
        ) : (
          <div>
              <div className={style.container__ContainerForm_form_halfContainer}>
                <div>
                  <label htmlFor="name">Nome</label>
                  <input
                    className={style.container__ContainerForm_form_input}
                    id="name"
                    name="name"
                    placeholder={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    required
                  />
                </div>
                {formik.touched.name && formik.errors.name ? (
                    <span className={style.form__error}>{formik.errors.name}</span>
                  ) : null}

                <div>
                  <label htmlFor="brand">Nome da Marca</label>
                  <input
                    className={style.container__ContainerForm_form_input}
                    id="brand"
                    name="brand"
                    placeholder={formik.values.startDate}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.brand}
                    required
                  />
                  {formik.touched.brand && formik.errors.brand ? (
                    <span className={style.form__error}>{formik.errors.brand}</span>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="price">Valor</label>
                  <input
                    className={style.container__ContainerForm_form_input}
                    id="price"
                    name="price"
                    placeholder={formik.values.price}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.price}
                    required
                  />
                </div>
                {formik.touched.price && formik.errors.price ? (
                    <span className={style.form__error}>{formik.errors.price}</span>
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
                  <label htmlFor="description">Descrição</label>
                  <input
                    className={style.container__ContainerForm_form_input}
                    id="description"
                    name="description"
                    placeholder={formik.values.coupon}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.coupon}
                    required
                  />
                </div>
                {formik.touched.description && formik.errors.description ? (
                    <span className={style.form__error}>{formik.errors.description}</span>
                  ) : null}
                </div>
            </div>
        )}

    </>
  )
}


export default DadosPromocao;