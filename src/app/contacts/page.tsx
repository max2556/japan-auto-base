'use client'

import Image from 'next/image';
import Button from '../components/shared/Button';
import { useEffect, useState } from 'react';
import { api } from '../utils/axios';

export default function Page() {
  const [email, setEmail] = useState<string | undefined>()
  const [phone, setPhone] = useState<string | undefined>()

  const fetchContact = async (type: 'email' | 'phone') => {
    const { data } = await api.get('/contacts', {
      params: {type}
    })
    return data.contacts[0]?.value as string | undefined
  }

  useEffect(() => {
    const fetchEmail = async () => {
      const email = await fetchContact('email')
      setEmail(email)
    }
    const fetchPhone = async () => {
      const phone = await fetchContact('phone')
      setPhone(phone)
    }
    fetchEmail()
    fetchPhone()
  }, [])

  return (
    <div className="bg-brand-gray">
      <section className="max-w-5xl mx-auto space-y-4 -mt-10 px-4 lg:px-11">
        <div className="lg:pr-6 space-y-1">
          <h2>Контакты</h2>
          <p className="max-w-[37.5rem] text-sm leading-4 mt-1">
            Мы JapanAutoBase - продаем автомобили из Японии c 2008 года, продали
            более 10000 автомобилей, помогаем пройти через все этапы покупки и
            доставки авто прямо в ваши руки.
          </p>
        </div>

        {/* Docs & Tel */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-2">
          {/* Tel */}
          <div className="w-full lg:w-fit grid place-content-center bg-white rounded-10 p-4">
            <div className="flex items-center gap-2">
              {/* Whatsapp */}
              <a href="tel:" className="group">
                <Image
                  src="/assets/images/icon-whatsapp.png"
                  alt="Whatsapp Icon"
                  width={24}
                  height={24}
                  className="shrink-0 group-hover:opacity-80 transition-all duration-200"
                />
              </a>
              {/* Tel */}
              <a
                href="tel:"
                className="group flex items-center gap-2 font-bold"
              >
                <svg
                  width="23"
                  height="22"
                  viewBox="0 0 23 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="11.9277" cy="11" r="11" fill="#0B1736" />
                  <path
                    d="M10.3123 8.58033L9.73427 7.1222C9.50304 6.28898 9.10805 6.28897 8.91536 6.28898C8.1928 6.2369 7.82933 6.80974 7.71109 6.96597C7.01743 7.88251 7.19727 9.22261 7.37389 9.77809C8.64561 13.4443 12.0465 15.2982 13.6843 15.6627C16.5264 16.0793 16.5264 13.84 16.6227 13.5797C16.6998 13.3713 16.5264 13.2151 16.4301 13.163C15.9965 12.9374 15.0427 12.434 14.6959 12.2257C14.3491 12.0174 14.1018 12.2083 14.0215 12.3298C13.8609 12.5555 13.5013 13.0693 13.3471 13.3193C13.193 13.5692 12.9296 13.4929 12.8172 13.4234C10.216 12.1736 9.87878 10.7155 9.73427 10.4551C9.60731 10.2263 9.67004 10.0558 9.73427 9.98639C9.78244 9.93431 9.93659 9.75726 10.1678 9.46563C10.399 9.174 10.3605 8.75392 10.3123 8.58033Z"
                    fill="white"
                  />
                </svg>
                <span className="text-sm whitespace-nowrap">
                  {phone}
                </span>
              </a>
            </div>
          </div>
          {/* Email */}
          <div className="w-full lg:w-fit text-center bg-white rounded-10 p-4 lg:px-7">
            <a
              href="mailto:japanautobase@mail.com"
              className="text-sm font-bold"
            >
              {email}
            </a>
          </div>
          {/* Email */}
          <div className="w-full lg:flex-1 text-center text-sm font-bold bg-white rounded-10 p-4">
            Место для банковских реквезитов
          </div>
        </div>
        {/* Map */}
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <a
            href="https://yandex.com/maps/75/vladivostok/search/japan%20auto%20base/?utm_medium=mapframe&utm_source=maps"
            style={{
              color: '#eee',
              fontSize: '12px',
              position: 'absolute',
              top: '0px',
            }}
          >
            japan auto base во Владивостоке
          </a>
          <a
            href="https://yandex.com/maps/75/vladivostok/?utm_medium=mapframe&utm_source=maps"
            style={{
              color: '#eee',
              fontSize: '12px',
              position: 'absolute',
              top: '14px',
            }}
          >
            Владивосток
          </a>
          <iframe
            src="https://yandex.com/map-widget/v1/?azimuth=4.267231805001977&display-text=japan%20auto%20base&ll=131.911040%2C43.085848&mode=search&sctx=ZAAAAAgCEAAaKAoSCaLvbmUJfWBAEe1%2FgLVqjUVAEhIJVBuciH5t0D8RDtjV5CmruT8iBgABAgMEBSgKOABAS0gBagJydZ0BzcxMPaABAKgBAL0BBA3q4MIBEZac4NO%2BBNeX08r%2FAYfQq7h4ggIPamFwYW4gYXV0byBiYXNligIAkgIDMTM3mgIMZGVza3RvcC1tYXBz&sll=131.911040%2C43.085848&sspn=0.408402%2C0.159583&text=japan%20auto%20base&z=12.04"
            frameBorder="1"
            allowFullScreen
            style={{ position: 'relative' }}
            className="w-full h-60 sm:h-96 lg:h-[35.6875rem] rounded-10 lg:rounded-20"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
