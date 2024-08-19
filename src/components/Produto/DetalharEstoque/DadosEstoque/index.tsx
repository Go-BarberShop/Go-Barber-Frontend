"use client"
import style from "./produto.module.scss";

interface DadosEstoqueProps {
    formik: any;
    editar: boolean;
    hrefAnterior: string;
    }

const DadosEstoque: React.FC<DadosEstoqueProps> = ({ formik, editar }) => {


  return (
    <>
        {editar === false ? (
              <div>
                <div className={style.container__ContainerForm_form_halfContainer}>
                <div>
                    <label htmlFor="batchNumber">Lote </label>
                    <input
                      id="batchNumber"
                      className={style.container__ContainerForm_form_input}
                      name="batchNumber"
                      placeholder="Não informado"
                      onBlur={formik.handleBlur}
                      value={formik.values.batchNumber}
                      disabled
                    />
                  </div>
                
                  <div>
                    <label htmlFor="quantity">Quantidade</label>
                    <input
                      id="quantity"
                      className={style.container__ContainerForm_form_input}
                      name="quantity"
                      placeholder="Não informado"
                      value={formik.values.quantity}
                      disabled
                    />
                  </div>
                  <div>
                    <label htmlFor="acquisitionDate">Data de Compra</label>
                    <input
                      id="acquisitionDate"
                      className={style.container__ContainerForm_form_input}
                      name="acquisitionDate"
                      placeholder="Não informado"
                      onBlur={formik.h1andleBlur}
                      value={formik.values.acquisitionDate}
                      disabled
                    />
                  </div>
                  <div>
                    <label htmlFor="expirationDate">Validade do Produto </label>
                    <input
                      id="expirationDate"
                      className={style.container__ContainerForm_form_input}
                      name="expirationDate"
                      placeholder="Não informado"
                      onBlur={formik.handleBlur}
                      value={formik.values.expirationDate}
                      disabled
                    />
                  </div>
                  
                </div>

            </div>
        ) : (
          <div>
              <div className={style.container__ContainerForm_form_halfContainer}>
                <div>
                  <label htmlFor="batchNumber">Lote</label>
                  <input
                    className={style.container__ContainerForm_form_input}
                    id="batchNumber"
                    name="batchNumber"
                    placeholder={formik.values.batchNumber}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.batchNumber}
                    required
                  />
                </div>
                {formik.touched.batchNumber && formik.errors.batchNumber ? (
                    <span className={style.form__error}>{formik.errors.batchNumber}</span>
                  ) : null}

                <div>
                  <label htmlFor="quantity">Quantidade</label>
                  <input
                    className={style.container__ContainerForm_form_input}
                    id="quantity"
                    name="quantity"
                    placeholder={formik.values.startDate}
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
                  <label htmlFor="acquisitionDate">Data de Compra</label>
                  <input
                    className={style.container__ContainerForm_form_input}
                    id="acquisitionDate"
                    name="acquisitionDate"
                    placeholder={formik.values.acquisitionDate}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.acquisitionDate}
                    required
                  />
                </div>
                {formik.touched.acquisitionDate && formik.errors.acquisitionDate ? (
                    <span className={style.form__error}>{formik.errors.acquisitionDate}</span>
                  ) : null}
                <div>
                  <label htmlFor="size">Validade do Produto </label>
                  <input
                    className={style.container__ContainerForm_form_input}
                    id="expirationDate"
                    name="expirationDate"
                    placeholder={formik.values.endDate}
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

            </div>
        )}

    </>
  )
}


export default DadosEstoque;