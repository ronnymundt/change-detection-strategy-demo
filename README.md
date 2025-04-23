# Change Detection OnPush Strategy Demo 🔄

Eine kleine Angular 19 Demonstration zur Veranschaulichung, 
wie sich die **Change Detection** in Angular verhält – insbesondere 
beim Ändern von Objekt-Referenzen innerhalb eines Formulars.

## 🛠️ Technologien

- Angular 19
- Reactive Forms
- `ChangeDetectionStrategy.OnPush`
- Angular Material


## 🎯 Ziel der Demo

Diese Demo zeigt:

- Wie Angular-Templates **Änderungen an Referenzen erkennen**
- Dass eine **neue Referenz** (z.B. via Spread oder Zuweisung) Change Detection auslöst
- Während **Mutationen an bestehenden Objekten** bei `OnPush` nicht automatisch erkannt werden

## 🚀 Lokales Setup

```
git clone https://github.com/ronnymundt/change-detection-strategy-demo.git
cd change-detection-strategy-demo
npm install
ng serve
```

## 🎥 Screencast

![Screencast](/src/assets/screencast.gif)

