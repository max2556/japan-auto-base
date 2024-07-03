'use client'

import { fetchContacts } from "@/app/services/contacts";
import { useState, useEffect } from "react";

export default function Email() {
  const [mail, setMail] = useState<string | null>(null);
  const [error, setError] = useState<Nillable<string>>(null);

  useEffect(() => {
    const fetchMail = async () => {
      const data = await fetchContacts("email");
      if("error" in data) {
        setError(data.error);
      } else {
        setMail(data.value);
      }
    };
    fetchMail();
  }, [error]);

  return (
    <a href={`mailto:${mail}`}>
      {error ?? mail ?? "Loading..."}
    </a>
  );
}
