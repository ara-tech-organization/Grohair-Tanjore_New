import React, { useEffect, useMemo, useState } from "react";
import styles from "./BookAppointment.module.css";
import { FaCalendarAlt, FaClock, FaCheckCircle } from "react-icons/fa";

import hero from "../../assets/hair treatment1.jpg"; // single large image
import iconHair from "../../assets/hair.png";
import iconSkin from "../../assets/skin.png";

const SERVICES = [
  { id: "hair", label: "Hair Service", icon: iconHair },
  { id: "skin", label: "Skin Service", icon: iconSkin },
];

// NEW: detailed services
const HAIR_LIST = [
  "Hair Transplant",
  "GFC Treatment",
  "PRP Treatment",
  "Cosmetic Hair System",
  "Oxygen Laser Therapy",
  "Other Hair Care Service",
];

const SKIN_LIST = [
  "Hydra Facial",
  "Carbon Laser",
  "Laser Hair Removal",
  "Face PRP",
  "Skin Brightening",
  "Other Skin Care Service",
];

// helper to generate time slots (09:00 - 17:00 every 30 min)
function generateSlots(open = 9, close = 18, stepMinutes = 30) {
  const slots = [];

  for (let h = open; h < close; h++) {
    for (let m = 0; m < 60; m += stepMinutes) {
      const hour24 = h;
      const hour12 = hour24 % 12 || 12; // convert 0 → 12
      const mm = String(m).padStart(2, "0");
      const period = hour24 < 12 ? "AM" : "PM";

      slots.push(`${hour12}:${mm} ${period}`);
    }
  }
  return slots;
}



// simple phone validation (loose)
function validPhone(phone) {
  const cleaned = phone.replace(/\D/g, "");
  return cleaned.length >= 10 && cleaned.length <= 15;
}

// simple email validation
function validEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function BookAppointment() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(""); // nothing selected initially
  const [specificService, setSpecificService] = useState(""); // NEW
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState("");
  // const [notes, setNotes] = useState("");

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(null);

  // generate all slots once
  const allSlots = useMemo(() => generateSlots(9, 18, 30), []);

  // available slots: if date is today, remove past time slots (simple)
 const availableSlots = useMemo(() => {
  if (!date) return allSlots;

  const selected = new Date(date + "T00:00:00");
  const now = new Date();

  const isToday =
    selected.getFullYear() === now.getFullYear() &&
    selected.getMonth() === now.getMonth() &&
    selected.getDate() === now.getDate();

  // If NOT today → show all slots
  if (!isToday) return allSlots;

  // If TODAY → hide past slots
  return allSlots.filter((slot) => {
    let [time, period] = slot.split(" ");
    let [hh, mm] = time.split(":").map(Number);

    // Convert to 24-hour
    if (period === "PM" && hh !== 12) hh += 12;
    if (period === "AM" && hh === 12) hh = 0;

    const slotTime = new Date(
      selected.getFullYear(),
      selected.getMonth(),
      selected.getDate(),
      hh,
      mm
    );

    return slotTime.getTime() >= now.getTime() + 30 * 60000;
  });
}, [date, allSlots]);


  useEffect(() => {
    // clear slot if it's no longer available after date change
    if (slot && !availableSlots.includes(slot)) setSlot("");
  }, [date, availableSlots, slot]);

  function validate() {
    const errs = {};
    if (!name.trim()) errs.name = "Please enter your name";
    if (!email.trim() || !validEmail(email)) errs.email = "Enter a valid email";
    if (!phone.trim() || !validPhone(phone)) errs.phone = "Enter a valid phone";
    if (!date) errs.date = "Choose a date";
    if (!slot) errs.slot = "Choose a time slot";
    if (!service) errs.service = "Choose a service";
    if (!specificService)
      errs.specificService =
        service === "hair"
          ? "Please select a hair service"
          : "Please select a skin service";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (submitting) return;
    if (!validate()) return;

    setSubmitting(true);
    // Simulate an API call (since we cannot send requests here)
    setTimeout(() => {
      setSubmitting(false);
      setSuccess({
        name,
        date,
        slot,
        service,
        specificService,
      });
      // optionally reset form or keep values
    }, 900);
  }

  function resetForm() {
    setName("");
    setEmail("");
    setPhone("");
    setService(SERVICES[0].id);
    setSpecificService(""); // NEW
    setDate("");
    setSlot("");
    // setNotes("");
    setErrors({});
    setSuccess(null);
  }

  const currentList =
    service === "hair" ? HAIR_LIST : SKIN_LIST;

  return (
    <section
      className={styles.section}
      aria-label="Book your appointment"
      id="BookAppointment"
    >
      <h2 className={styles.heading}>Book your Appointment</h2>
      <div className={styles.inner}>
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.row}>
            <label className={styles.label}>
              Name
              <input
                className={styles.input}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "err-name" : undefined}
              />
              {errors.name && (
                <div id="err-name" className={styles.error}>
                  {errors.name}
                </div>
              )}
            </label>

            <label className={styles.label}>
              Email
              <input
                className={styles.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                type="email"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "err-email" : undefined}
              />
              {errors.email && (
                <div id="err-email" className={styles.error}>
                  {errors.email}
                </div>
              )}
            </label>
          </div>

          <div className={styles.row}>
            <label className={styles.label}>
              Phone
              <input
                className={styles.input}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone Number"
                inputMode="tel"
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "err-phone" : undefined}
              />
              {errors.phone && (
                <div id="err-phone" className={styles.error}>
                  {errors.phone}
                </div>
              )}
            </label>

            <label className={styles.label}>
              Service
              <select
                className={styles.input}
                value={specificService}
                onChange={(e) => {
                  setSpecificService(e.target.value);
                  if (e.target.value.startsWith("Hair:")) setService("hair");
                  if (e.target.value.startsWith("Skin:")) setService("skin");
                }}
                aria-invalid={!!errors.specificService}
                aria-describedby={errors.specificService ? "err-specificService" : undefined}
              >
                <option value="">Select a service</option>

                {/* Hair Group */}
                <option value="__hair-header" disabled style={{ fontWeight: "bold" }}>
                  — Hair Treatments —
                </option>

                {HAIR_LIST.map((item) => (
                  <option key={item} value={`Hair:${item}`}>
                    {item}
                  </option>
                ))}

                {/* Skin Group */}
                <option value="__skin-header" disabled style={{ fontWeight: "bold" }}>
                  — Skin Treatments —
                </option>

                {SKIN_LIST.map((item) => (
                  <option key={item} value={`Skin:${item}`}>
                    {item}
                  </option>
                ))}
              </select>

              {errors.specificService && (
                <div id="err-specificService" className={styles.error}>
                  {errors.specificService}
                </div>
              )}
            </label>
          </div>

          <div className={styles.row}>
            <label className={styles.label}>
              Date
              <input
                className={styles.input}
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                aria-invalid={!!errors.date}
                aria-describedby={errors.date ? "err-date" : undefined}
                min={new Date().toISOString().split("T")[0]}
              />
              {errors.date && (
                <div id="err-date" className={styles.error}>
                  {errors.date}
                </div>
              )}
            </label>

            <label className={styles.label}>
              Time slot
              <select
                className={styles.input}
                value={slot}
                onChange={(e) => setSlot(e.target.value)}
                aria-invalid={!!errors.slot}
                aria-describedby={errors.slot ? "err-slot" : undefined}
              >
                <option value="">Choose a time</option>
                {availableSlots.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              {errors.slot && (
                <div id="err-slot" className={styles.error}>
                  {errors.slot}
                </div>
              )}
            </label>
          </div>

          <div className={styles.actions}>
            <button
              type="submit"
              className={styles.book}
              disabled={submitting}
            >
              {submitting ? "Booking..." : "Book an Appointment"}
            </button>

            <button
              type="button"
              className={styles.reset}
              onClick={resetForm}
            >
              Reset
            </button>
          </div>

          {/* live summary */}
          <div className={styles.summary}>
            <strong>Summary</strong>
            <div>
              <span>{name || "—"}</span> •{" "}
              <span>
                {service === "hair" ? "Hair" : "Skin"}
                {specificService ? ` — ${specificService}` : ""}
              </span>
            </div>
            <div>
              <span>{date || "—"}</span> • <span>{slot || "—"}</span>
            </div>
          </div>

          {/* success toast */}
          {success && (
            <div className={styles.toast} role="status" aria-live="polite">
              <FaCheckCircle className={styles.toastIcon} />
              <div>
                <div className={styles.toastTitle}>Appointment Booked</div>
                <div className={styles.toastMsg}>
                  Thanks {success.name}. — {success.date} at {success.slot} (
                  {success.service === "hair" ? "Hair" : "Skin"} —{" "}
                  {success.specificService})
                </div>
              </div>
            </div>
          )}
        </form>

        <div className={styles.left}>
          <div className={styles.heroWrap}>
            <img src={hero} alt="Clinic hero" className={styles.hero} />
          </div>

          <div className={styles.trust}>
            <h2 className={styles.heroTitle}>Book Your Appointment</h2>
            <p className={styles.heroLead}>
              Quick, secure booking — choose date & time, pick a service, and
              we’ll confirm.
            </p>
            <div className={styles.badge}>Trusted Clinic</div>
          </div>
        </div>
      </div>
    </section>
  );
}
