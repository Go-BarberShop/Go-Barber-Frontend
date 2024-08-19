"use client";
import styles from './page.module.scss'
import Login from "@/components/Login";
import BarbeiroComponent from '@/components/Barber/ListarBarbeiros';

export default function Home() {
  return (
    <BarbeiroComponent />
  );
}
