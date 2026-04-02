import { useState } from "react";
import styles from "./Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const ALL_SLOT_HOURS = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18]; // 9 AM – 7 PM

function formatHour(hour) {
  const suffix = hour >= 12 ? "PM" : "AM";
  const h = hour > 12 ? hour - 12 : hour;
  return `${h}:00 ${suffix}`;
}

function formatSlot(hour) {
  return `${formatHour(hour)} - ${formatHour(hour + 1)}`;
}

// ─── REPLACE THIS FUNCTION WITH YOUR REAL API CALL ───────────────────────────
// Expected response shape: { availableSlots: [9, 11, 14, ...] }  (hour numbers)
async function fetchAvailableSlots(date) {
  await new Promise((r) => setTimeout(r, 800)); // simulated network delay
  // Mock: randomly mark ~3 slots as booked so the UI looks realistic
  const booked = ALL_SLOT_HOURS.filter(() => Math.random() < 0.3);
  return ALL_SLOT_HOURS.filter((h) => !booked.includes(h));
}
// ─────────────────────────────────────────────────────────────────────────────

export default function ContactPage() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [availableSlots, setAvailableSlots] = useState([]);
  const [slotsLoading, setSlotsLoading] = useState(false);
  const [slotsError, setSlotsError] = useState("");

  const today = new Date().toISOString().split("T")[0];

  async function handleDateChange(e) {
    const date = e.target.value;
    setSelectedDate(date);
    setSelectedSlot("");
    setAvailableSlots([]);
    setSlotsError("");
    if (!date) return;
    setSlotsLoading(true);
    try {
      const slots = await fetchAvailableSlots(date);
      setAvailableSlots(slots);
    } catch {
      setSlotsError("Could not load slots. Please try again.");
    } finally {
      setSlotsLoading(false);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedSlot) {
      alert("Please select a time slot.");
      return;
    }
    // later you can connect backend / emailjs etc
    alert("Form submitted! (you can handle this later)");
  };

  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.container}>
        {/* Left: Form */}
        <div className={styles.formCard}>
          <h2 className={styles.heading}>Contact Us</h2>
          <p className={styles.subtext}>
            Book an appointment or ask us anything. We’ll get back to you soon.
          </p>

          <form className={styles.form} onSubmit={handleSubmit}>
            {/* Name */}
            <div className={styles.fieldGroup}>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email & Phone in row */}
            <div className={styles.row}>
              <div className={styles.fieldGroup}>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email Address"
                  required
                />
              </div>
              <div className={styles.fieldGroup}>
                <label htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Phone number"
                  required
                />
              </div>
            </div>

            {/* Date */}
            <div className={styles.fieldGroup}>
              <label htmlFor="date">Preferred Date</label>
              <input
                id="date"
                type="date"
                min={today}
                value={selectedDate}
                onChange={handleDateChange}
                required
              />
            </div>

            {/* Time Slot dropdown — shown only after a date is picked */}
            {selectedDate && (
              <div className={styles.fieldGroup}>
                <label htmlFor="slot">Available Time Slots</label>

                {slotsLoading && (
                  <p className={styles.slotsStatus}>Loading available slots...</p>
                )}

                {slotsError && (
                  <p className={styles.slotsError}>{slotsError}</p>
                )}

                {!slotsLoading && !slotsError && availableSlots.length === 0 && (
                  <p className={styles.slotsStatus}>No slots available for this date.</p>
                )}

                {!slotsLoading && !slotsError && availableSlots.length > 0 && (
                  <select
                    id="slot"
                    value={selectedSlot}
                    onChange={(e) => setSelectedSlot(e.target.value)}
                    required
                  >
                    <option value="">Select a time slot</option>
                    {availableSlots.map((hour) => (
                      <option key={hour} value={formatSlot(hour)}>
                        {formatSlot(hour)}
                      </option>
                    ))}
                  </select>
                )}
              </div>
            )}

            {/* Treatment dropdown */}
            <div className={styles.fieldGroup}>
              <label htmlFor="treatment">Treatment</label>
              <select id="treatment" required>
                <option value="">Select treatment</option>
                <option value="hairtreatment">Hair Treatment</option>
                <option value="skintreatment">Skin Treatment</option>
              </select>
            </div>

            <button type="submit" className={styles.submitBtn}>
              Submit
            </button>
          </form>
        </div>

        {/* Right: Map */}
        <div className={styles.mapCard}>
          <h3 className={styles.mapHeading}>Find Us</h3>
          <p className={styles.mapText}>We’re located here.</p>

          <div className={styles.mapWrapper}>
            <iframe
              title="clinic-location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3546.939232706588!2d79.136112!3d10.773315!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baab962ed07ae27%3A0x301c1c67f63e3b6c!2sAdvanced%20GroHair%20%26%20GloSkin%20-%20Thanjavur!5e1!3m2!1sen!2sin!4v1764052023250!5m2!1sen!2sin"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className={styles.mapIframe}
            ></iframe>
          </div>

<div className={styles.contactInfoGrid}>
  <div className={styles.infoBox}>
    <span className={styles.iconWrap}>
      <FontAwesomeIcon icon={faPhoneAlt} />
    </span>
    <p className={styles.infoTitle}>Phone</p>
    <p className={styles.infoValue}>+918098756789</p>
  </div>

  <div className={styles.infoBox}>
    <span className={styles.iconWrap}>
      <FontAwesomeIcon icon={faEnvelope} />
    </span>
    <p className={styles.infoTitle}>Email</p>
    <p className={styles.infoValue}>grohairgloskintnj@gmail.com</p>
  </div>

  <div className={styles.infoBox}>
    <span className={styles.iconWrap}>
      <FontAwesomeIcon icon={faMapMarkerAlt} />
    </span>
    <p className={styles.infoTitle}>Address</p>
    <p className={styles.infoValue}>3,1st Floor,Philomena Hotel and Apartment,Arulananda Nagar,Thanjavur,Tamil Nadu-613007</p>
  </div>
</div>

        </div>
      </div>
    </section>
  );
}
