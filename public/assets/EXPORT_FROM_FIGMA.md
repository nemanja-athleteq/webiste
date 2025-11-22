# Assets Export Guide - Figma to Local

## 📋 Assets koje treba da eksportuješ sa Figme:

### PNG Slike (14 fajlova):

1. **Hero Background & Athlete Image**
   - `hero-background.png` (trenutno: b374c9c02b339586ed379284ed5faaa8419686cb.png)
   - Node: Hero background image

2. **AI Coach Phone**
   - `ai-coach-phone.png` (trenutno: d5c07f8488446704610db0575738eb8b41ca3cb1.png)
   - Node: Photo - AI Coach Phone

3. **Slider Section Background**
   - `slider-background.png` (trenutno: 66776ed8db3f4e63805b9ff887ca7d789e29e1a8.png)
   - Node: Slider Section background

4. **Perspective Cards (5 slika):**
   - `card-athletes.png` (trenutno: b757fc777e3cdaa574091ab1ef1e0827b9a3497e.png)
   - `card-coaches.png` (trenutno: 4a9085a2121475c03038d03585680b8521116a37.png)
   - `card-clubs.png` (trenutno: e6f83deb631ccdae206ce0f37afd6500309a5b20.png)
   - `card-parents.png` (trenutno: 0df66375a0e0269949de723ba290785efa6a347d.png)
   - `card-experts.png` (trenutno: 432e0c08560447c827c40f2f02801e589e300068.png)

5. **Testimonial Avatars (3 slike):**
   - `avatar-coach-martinez.png` (trenutno: 9d08c4a53d8b9f186f0f00dc5c21cd7fc9b7474e.png)
   - `avatar-sam-k.png` (trenutno: 600a38f52a28a620e44ab42a1fb8b7e8cd7c8042.png)
   - `avatar-james-thompson.png` (trenutno: 7e1d4d48996b10fc1f4aef739ab41c73f9fc403e.png)

6. **Club Logos (3 slike):**
   - `logo-didsbury-northern-hc.png` (trenutno: 5f3212dfbd4b8c837f9b58fc925f32c5e26a2ef8.png)
   - `logo-brooklands-hc.png` (trenutno: 39908c7401ce8eea75d9377f2945bbda6b8a5e52.png)
   - `logo-milton-keynes-hc.png` (trenutno: 3a3cc15e52631efd32dbfc91d6a4caa8fc7b5733.png)

### SVG Fajlovi (7 fajlova):

7. **Navigation Icons:**
   - `icon-user-circle.svg` (trenutno: f8a98a8d05923b6f9f6e23bb0c301304f43471af.svg)
   - `icon-user-path.svg` (trenutno: 74b1a62a2711d771ba6d1134c9d74d2d6e3aa895.svg)

8. **Decoration SVGs (5 fajlova):**
   - `decoration-top-left.svg` (trenutno: cb83e1cdce9330579c64a91645dc2f4a598f8182.svg)
   - `decoration-top-right.svg` (trenutno: 0d15c41a0d92699244e7ffc0d6a2c3676abe8903.svg)
   - `decoration-bottom-left.svg` (trenutno: 41b69db2b8a1de3188855823c12160e7f70202e6.svg)
   - `decoration-bottom-right.svg` (trenutno: 22fd53ebfe2bf810e915cc71cb6de22b767edaad.svg)
   - `decoration-hero.svg` (trenutno: 79360b05af0453a85217fa7a6014a3d07d9abfd7.svg)

9. **Footer & Logos:**
   - `logo-southgate-hc.svg` (trenutno: ae78a442d31311017523eead5cf1807b8a8dbcca.svg)
   - `separator-line.svg` (trenutno: 2a20ef42d12eb363bbd5403e69aac897f4abe4a9.svg)

---

## 🎨 Kako da eksportuješ sa Figme:

### Metod 1: Direktan Export (Preporučeno)

1. Otvori Figma fajl
2. Za svaki asset:
   - Selektuj layer/node u Figma-i
   - Desni klik → "Copy/Paste as" → "Copy as PNG" (za PNG) ili "Copy as SVG" (za SVG)
   - Ili u desnom panelu → Export → Izaberi format (PNG 2x ili SVG)
   - Sačuvaj u folder: `website-react/public/assets/`

### Metod 2: Bulk Export

1. Selektuj sve layere koje trebaš
2. U desnom panelu → Export settings
3. Dodaj PNG 2x i SVG export options
4. Export All
5. Preimenuj fajlove prema gornjem spisku

---

## 📂 Folder Struktura:

```
website-react/
  public/
    assets/
      # PNG Images
      hero-background.png
      ai-coach-phone.png
      slider-background.png
      card-athletes.png
      card-coaches.png
      card-clubs.png
      card-parents.png
      card-experts.png
      avatar-coach-martinez.png
      avatar-sam-k.png
      avatar-james-thompson.png
      logo-didsbury-northern-hc.png
      logo-brooklands-hc.png
      logo-milton-keynes-hc.png

      # SVG Files
      icon-user-circle.svg
      icon-user-path.svg
      decoration-top-left.svg
      decoration-top-right.svg
      decoration-bottom-left.svg
      decoration-bottom-right.svg
      decoration-hero.svg
      logo-southgate-hc.svg
      separator-line.svg
```

---

## ✅ Kada završiš export:

Samo mi javi i ja ću automatski ažurirati sve komponente da koriste nove lokalne putanje umesto localhost:3845 URL-ova.

---

**Napomena:** Koristiću `/assets/` putanje koje automatski referenciraju `public/assets/` folder u Vite projektu.
