"use client"
import style from "./promocao.module.scss";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";

interface DadosPromocaoProps {
    formik: any;
    editar: boolean;
    hrefAnterior: string;
    }

const DadosPromocao: React.FC<DadosPromocaoProps> = ({ formik, editar, hrefAnterior }) => {


  return (
    <>
      

      <div className={style.container__ContainerForm_form_halfContainer}>

        {editar === false ? (
          <>
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
              <label htmlFor="startDate">Data de Inicio </label>


              <input
                id="startDate"
                className={style.container__ContainerForm_form_input}
                name="startDate"
                placeholder="Não informado"
                onBlur={formik.handleBlur}
                value={formik.values.startDate}
                disabled
              />
            </div>
            <div>
              <label htmlFor="totalPrice">Valor</label>
              <input
                id="totalPrice"

                className={style.container__ContainerForm_form_input}
                name="totalPrice"
                placeholder="Não informado"
                onBlur={formik.handleBlur}
                value={formik.values.totalPrice}
                disabled
              />
            </div>
            
            <div>

              <label htmlFor="endDate">Data Final</label>

              <input
                id="endDate"
                className={style.container__ContainerForm_form_input}
                name="endDate"
                placeholder="Não informado"
                value={formik.values.endDate}
                disabled
              />
            </div>

            <div>
              <label htmlFor="coupon">Cupom </label>
              <input
                id="coupon"
                className={style.container__ContainerForm_form_input}
                name="coupon"
                placeholder="Não informado"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.coupon}
                disabled
              />
            </div>
        
          </>
        ) : (
          <>

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
              <label htmlFor="startDate">Data Inicio</label>

              <input
                className={style.container__ContainerForm_form_input}
                id="startDate"
                name="startDate"
                type= "date"
                placeholder={formik.values.startDate}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.startDate}
                required
              />
              {formik.touched.startDate && formik.errors.startDate ? (
                <span className={style.form__error}>{formik.errors.startDate}</span>
              ) : null}
            </div>
            <div>
              <label htmlFor="totalPrice">Valor</label>

              <input
                className={style.container__ContainerForm_form_input}
                id="totalPrice"
                name="totalPrice"
                placeholder={formik.values.totalPrice}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.totalPrice}
                required
              />
            </div>
            {formik.touched.totalPrice && formik.errors.totalPrice ? (
                <span className={style.form__error}>{formik.errors.totalPrice}</span>
              ) : null}
            <div>

              <label htmlFor="endDate">Data Final </label>
              <input
                className={style.container__ContainerForm_form_input}
                id="endDate"
                name="endDate"
                type="date"
                placeholder={formik.values.endDate}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.endDate}
                required
              />
              {formik.touched.endDate && formik.errors.endDate ? (
                <span className={style.form__error}>{formik.errors.endDate}</span>
              ) : null}
            </div>
            <div>
              <label htmlFor="coupon">Cupom</label>

              <input
                className={style.container__ContainerForm_form_input}
                id="coupon"
                name="coupon"
                placeholder={formik.values.coupon}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.coupon}
                required
              />
            </div>
            {formik.touched.coupon && formik.errors.coupon ? (
                <span className={style.form__error}>{formik.errors.coupon}</span>
              ) : null}

          </>
        )}

      </div>
    </>
  )
}


export default DadosPromocao;