'use client'

import Image from 'next/image';
import Button from '../components/shared/Button';
import { useEffect, useState } from 'react';
import { api } from '../utils/axios';
import Email from '../components/shared/Email';
import PhoneNumber from '../components/shared/PhoneNumber';

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
              <PhoneNumber theme="dark"/>
            </div>
          </div>
          {/* Email */}
          <div className="w-full lg:w-fit text-center bg-white rounded-10 p-4 lg:px-7">
            <span
              className="text-sm font-bold hover:text-brand-dark/80 transition-all duration-200"
            >
              <Email/>
            </span>
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
