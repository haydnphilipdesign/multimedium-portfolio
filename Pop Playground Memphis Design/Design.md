# Pop Playground Website Design

## Overview
- **Motion Style**: Kinetic Memphis Playground – Physics-based interactions, liquid morphing shapes, and explosive color transitions
- **Animation Intensity**: Ultra-Dynamic
- **Technology Stack**: GSAP + ScrollTrigger, CSS Custom Properties, SVG Morphing, WebGL Shaders (hero only), Lottie

## Brand Foundation

### Colors
Primary Colors:
- Black: #000000
- White: #FFFFFF
- Light Pink: #F4C7EE
- Light Purple: #C7B9F4
- Light Green: #CAF7D2
- Light Yellow: #F7FAC7
- Light Blue: #C7E8FA
- Light Orange: #F7D6C7
- Light Red: #F7C7C7
- Dark Pink: #F795E9
- Dark Purple: #9B87F7
- Dark Green: #8BF7A3
- Dark Yellow: #F7FC87
- Dark Blue: #87D6F7
- Dark Orange: #F7B287
- Dark Red: #F78787

Text Colors:
- Primary Text: #000000
- Secondary Text: #444444

### Typography

Font Families:
- Display Font: "Cherry Bomb"
- Body Font: "Lato"
- Decorative Font: "Coda"

Font URLs:
```html
<link href="https://fonts.googleapis.com" rel="preconnect">
<link href="https://fonts.gstatic.com" rel="preconnect" crossorigin="anonymous">
<script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" type="text/javascript"></script>
<script type="text/javascript">
  WebFont.load({
    google: {
      families: ["Lato:100,100italic,300,300italic,400,400italic,700,700italic,900,900italic","Coda:200,300,regular,800,800italic","Cherry Bomb:regular"]
    }
  });
</script>
```

Typography Scale:
- H1: 70px / 77px line-height, Cherry Bomb
- H2: 50px / 55px line-height, Cherry Bomb
- H3: 40px / 44px line-height, Cherry Bomb
- H4: 30px / 36px line-height, Cherry Bomb
- Body: 18px / 1.6 line-height, Lato
- Small Text: 14px / 1.4 line-height, Lato

### Core Message
A vibrant, unapologetically playful creative brand for children that celebrates chaos, color, and pure imagination.

---

## Global Motion System

### Animation Timing Library

**Custom Easing Functions:**
```css
--ease-playful: cubic-bezier(0.68, -0.55, 0.265, 1.55);      /* Bouncy overshoot */
--ease-elastic: cubic-bezier(0.34, 1.56, 0.64, 1);           /* Spring elastic */
--ease-dramatic: cubic-bezier(0.87, 0, 0.13, 1);             /* Sharp contrast */
--ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);                 /* Standard smooth */
--ease-bounce: cubic-bezier(0.34, 1.8, 0.64, 1);             /* High bounce */
--ease-magnetic: cubic-bezier(0.25, 0.46, 0.45, 0.94);       /* Magnetic pull */
```

**Duration Scale:**
- Micro: 150ms (hover states, small feedback)
- Quick: 300ms (button interactions)
- Standard: 500ms (element entrances)
- Dramatic: 800ms (major reveals)
- Epic: 1200ms (hero animations)
- Ambient: 8000-20000ms (continuous loops)

**Stagger Patterns:**
- Cascade: 80ms between elements
- Wave: 120ms with overlapping
- Explosion: 50ms from center outward
- Domino: 100ms directional chain

### Continuous Ambient Effects

**Floating Memphis Shapes:**
- 5-7 abstract shapes floating with sine-wave motion
- Each shape: unique period (8-15s), amplitude (10-30px)
- Rotation: continuous 360° over 20-40s
- Scale breathing: 0.95-1.05 over 4-6s
- Colors: Rotate through brand palette on 30s loop

**Living Background Patterns:**
- SVG pattern elements with subtle parallax on scroll
- Pattern scale: 1.0 → 1.05 on scroll progress
- Pattern opacity: 0.15 base, 0.25 on section focus

**Cursor Interaction Zone:**
- CSS custom properties (--cursor-x, --cursor-y) updated via throttled JS
- Elements within 200px of cursor receive magnetic pull
- No React state updates – use refs and CSS transforms only

### Scroll Engine Configuration

**Parallax Layers:**
- Layer 0 (Background): 0.3x scroll speed
- Layer 1 (Shapes): 0.6x scroll speed
- Layer 2 (Content): 1.0x scroll speed
- Layer 3 (Foreground elements): 1.3x scroll speed

**Pin Points:**
- Hero section: Pinned for 50vh additional scroll (internal animations)
- Featured section: Brief 20vh pin for image reveal
- About section: Split-screen pin for 100vh (image parallax)

**Progress-Driven Animations:**
- Section backgrounds: Color temperature shifts with scroll
- Typography: Weight/letter-spacing breathe with scroll velocity
- Shapes: Rotation accelerates during fast scrolls

---

## Section 1: Navigation

### Layout

**Spatial Composition:**
- Fixed position with z-index: 100
- Height: 80px with glass-morphism backdrop
- Logo positioned with subtle floating animation (8px vertical drift)
- Nav links arranged with variable spacing (creates organic feel)
- CTA button breaks grid, rotated -3° with heavy shadow

**Dynamic Behavior:**
- On scroll > 100px: Navigation shrinks to 60px, backdrop blur increases
- Logo morphs subtly: Scale 1.0 → 0.9, adds slight rotation
- Background: rgba(255,255,255,0.8) → rgba(255,255,255,0.95)

### Content

**Logo:** Pop Playground (Cherry Bomb, 30px)
**Nav Links:** About, Shop, Activities, Contact
**CTA:** "Let's Play!"

### Motion Choreography

#### Entrance Sequence
| Element | Animation | Values | Duration | Delay | Easing |
|---------|-----------|--------|----------|-------|--------|
| Logo | Scale + Rotate | scale: 0→1, rotate: -15°→0° | 600ms | 0ms | --ease-elastic |
| Nav Link 1 | Drop + Fade | y: -30px→0, opacity: 0→1 | 400ms | 100ms | --ease-bounce |
| Nav Link 2 | Drop + Fade | y: -30px→0, opacity: 0→1 | 400ms | 180ms | --ease-bounce |
| Nav Link 3 | Drop + Fade | y: -30px→0, opacity: 0→1 | 400ms | 260ms | --ease-bounce |
| Nav Link 4 | Drop + Fade | y: -30px→0, opacity: 0→1 | 400ms | 340ms | --ease-bounce |
| CTA Button | Pop + Wobble | scale: 0→1.1→1 | 500ms | 450ms | --ease-playful |

#### Scroll Effects
| Trigger | Element | Effect | Start | End | Values |
|---------|---------|--------|-------|-----|--------|
| 0-100px | Backdrop | Blur increase | 0px | 100px | blur: 0→12px |
| 0-100px | Logo | Scale down | 0px | 100px | scale: 1→0.85 |
| 0-100px | Nav container | Height shrink | 0px | 100px | height: 80→60px |

#### Interaction Effects

**Nav Links Hover:**
- Text color: #000 → #9B87F7 (200ms)
- Transform: translateY(-2px) with subtle rotation (0.5°)
- Underline draws from left: width 0→100% (250ms)

**CTA Button Hover:**
- Scale: 1 → 1.08 with rotation to 0°
- Shadow expands: 4px → 8px offset
- Background: #F795E9 → #F78787
- Inner text shakes: x-axis vibration (±2px, 3 cycles, 300ms)

---

## Section 2: Hero

### Layout

**Revolutionary Spatial Design:**
- Full viewport height with overflow visible for floating elements
- Diagonal composition: Content flows along 15° angle
- Text blocks positioned at golden ratio intersections
- Breaking the grid: Elements escape container bounds by 10-15%
- Z-depth layers: 5 distinct depth planes for parallax

**Grid Structure:**
```
|  [Shape - z:-2]        [Shape - z:-1]  |
|       ___________                      |
|      | HEADLINE |  [Shape - z:1]       |
|      |  z:0     |                     |
|      |__________|                      |
|  [Image - z:2]         [Shape - z:-1]  |
|         [CTA - z:3]                    |
```

### Content

**Headline (Split into animated words):**
- Line 1: "Unleash"
- Line 2: "Your Inner"
- Line 3: "Artist"

**Subheadline:** "Where creativity meets chaos in the most colorful way!"

**CTA:** "Start Creating"

### Images

**Hero Main Image**
- Resolution: 1024x1024 pixels
- Aspect Ratio: 1:1
- Suggested Generation Ratio: 1:1
- Transparent Background: No
- Photography Style: Candid lifestyle photography, overhead angle
- Subject: Child's hands actively creating art—painting with orange paint on paper with paintbrushes and colorful palette visible
- Composition: Top-down view, hands in action, art supplies arranged around
- Lighting: Soft natural light, high key exposure, minimal shadows
- Mood: Playful, creative, energetic, joyful
- Color Palette: White (background), orange (paint), blue, yellow, green, red (supplies)
- Post-processing: Bright and clean, high contrast, vibrant colors
- Full Generation Prompt: "Overhead view of child's hands painting with orange paint on white paper, surrounded by colorful art supplies including paintbrushes and a paint palette with blue, yellow, green, and red colors. Bright, soft natural lighting with a clean, high-key look. Playful, creative, and energetic mood. Background is a clean white surface."

**Decorative Image 1 (Small)**
- Resolution: 800x800 pixels
- Aspect Ratio: 1:1
- Suggested Generation Ratio: 1:1
- Transparent Background: No
- Visual Style: Modern abstract collage, Memphis design influence
- Subject: Abstract organic blob shape in bright yellow with wavy multicolored lines (pink, green, blue, orange, red)
- Composition: Centered blob with lines radiating outward
- Colors: Bright yellow, pink, green, blue, orange, red on white background
- Mood: Playful, energetic, whimsical
- Full Generation Prompt: "Modern abstract collage with Memphis design influence, featuring a large organic yellow blob shape in the center with wavy, multicolored lines (pink, green, blue, orange, red) radiating outward. Playful, energetic, and whimsical mood. Solid white background."

**Decorative Image 2 (Small)**
- Resolution: 800x800 pixels
- Aspect Ratio: 1:1
- Suggested Generation Ratio: 1:1
- Transparent Background: No
- Visual Style: Whimsical children's illustration, watercolor style
- Subject: Cute smiling whale with closed eyes and rosy cheeks, blowing heart-shaped blowhole spray
- Composition: Whale centered, small fish and bubbles around
- Colors: Soft blues for whale, pastel pink hearts, light blue background
- Mood: Cheerful, friendly, dreamy, peaceful
- Full Generation Prompt: "Whimsical children's illustration of a cute, smiling whale with closed eyes and rosy cheeks, blowing heart-shaped spray from its blowhole. Small fish and bubbles float around. Soft watercolor style with pastel colors. Light blue background. Cheerful, friendly, and dreamy mood."

### Motion Choreography

#### Entrance Sequence
| Element | Animation | Values | Duration | Delay | Easing |
|---------|-----------|--------|----------|-------|--------|
| Background Pattern | Fade + Scale | opacity: 0→0.15, scale: 1.2→1 | 1200ms | 0ms | --ease-smooth |
| "Unleash" | Clip Reveal + Slide | clipPath: inset(100% 0 0 0)→inset(0), y: 50→0 | 700ms | 200ms | --ease-dramatic |
| "Your Inner" | Clip Reveal + Slide | clipPath: inset(100% 0 0 0)→inset(0), y: 50→0 | 700ms | 400ms | --ease-dramatic |
| "Artist" | Explosive Entrance | scale: 0→1.1→1, rotate: -10°→0° | 800ms | 600ms | --ease-elastic |
| Subheadline | Fade + Rise | opacity: 0→1, y: 30→0 | 500ms | 900ms | --ease-smooth |
| CTA Button | Bounce In | scale: 0→1.15→1, y: 40→0 | 600ms | 1100ms | --ease-bounce |
| Hero Image | 3D Flip In | rotateY: 90°→0°, opacity: 0→1 | 800ms | 500ms | --ease-dramatic |
| Dec Image 1 | Float In | x: -100→0, opacity: 0→1, rotate: -20°→5° | 700ms | 800ms | --ease-elastic |
| Dec Image 2 | Float In | x: 100→0, opacity: 0→1, rotate: 20°→-5° | 700ms | 950ms | --ease-elastic |
| Memphis Shapes | Scatter In | From center, scale: 0→1, random rotation | 600ms | 300ms+ | --ease-playful |

#### Scroll Effects
| Trigger | Element | Effect | Start | End | Values |
|---------|---------|--------|-------|-----|--------|
| 0-50vh | Headline Words | Parallax Split | 0 | 50vh | Each word different speed (0.7x, 0.9x, 1.1x) |
| 0-50vh | Hero Image | Rise + Scale | 0 | 50vh | y: 0→-80px, scale: 1→1.1 |
| 0-50vh | Dec Image 1 | Float Away | 0 | 50vh | x: 0→-150px, rotate: 5°→25° |
| 0-50vh | Dec Image 2 | Float Away | 0 | 50vh | x: 0→150px, rotate: -5°→-25° |
| 0-100vh | Background Pattern | Parallax | 0 | 100vh | y: 0→-100px |
| 0-50vh | Memphis Shapes | Explosion Scatter | 0 | 50vh | Move outward 50-200px |
| 25vh-75vh | CTA Button | Fade Out | 25vh | 75vh | opacity: 1→0, y: 0→-50px |

#### Continuous Animations

**Headline Letters:**
- Each letter has subtle independent float
- Y-offset: ±3px, period: 3-5s (unique per letter)
- Rotation: ±1°, staggered timing

**Hero Image:**
- Gentle hover: y ±8px over 4s
- Subtle rotation: -1° to 1° over 6s
- Shadow pulses: 4px → 6px → 4px over 3s

**Decorative Images:**
- Continuous orbit around hero center
- Radius: 10px drift from base position
- Rotation: 360° over 30s

**Memphis Shapes:**
- Independent floating paths (Lissajous curves)
- Color cycling through brand palette (30s loop)
- Scale breathing: 0.9-1.1 over 5s

#### Interaction Effects

**Headline Hover (CSS-only):**
- Letters scale to 1.05 on hover
- Color shifts to nearest brand color
- Slight rotation (±3°)

**Hero Image Hover:**
- Scale: 1 → 1.05 (300ms)
- Shadow expands: 8px → 12px
- Subtle 3D tilt toward cursor (CSS :hover, not mousemove)

**CTA Button Hover:**
- Background: #F795E9 → #F78787
- Scale: 1 → 1.1 with rotation to 0°
- Shadow: 4px → 10px
- Inner icon bounces

### Advanced Effects

#### 3D Elements

**Hero Image Container:**
- perspective: 1000px on parent
- transform-style: preserve-3d
- On hover: rotateX(±5°) rotateY(±5°) based on cursor quadrant
- Transition: 400ms --ease-smooth

**Headline 3D Pop:**
- Text-shadow layers create depth
- On scroll, letters gain z-depth (translateZ: 0→20px)

#### Shader Effects (Hero Background Only)

**Liquid Color Mesh:**
- WebGL shader replacing static SVG background
- Organic blob shapes morphing slowly
- Colors from brand palette blending like paint
- Mouse influence: Colors swirl toward cursor (CSS custom properties, not state)
- Performance: requestAnimationFrame with 16ms minimum update

```glsl
// Simplified shader concept
uniform float u_time;
uniform vec2 u_cursor;
varying vec2 v_uv;

void main() {
  vec2 st = v_uv;
  float noise = snoise(st * 3.0 + u_time * 0.1);
  vec3 color1 = vec3(0.957, 0.584, 0.933); // Pink
  vec3 color2 = vec3(0.788, 0.725, 0.957); // Purple
  vec3 color = mix(color1, color2, noise);
  gl_FragColor = vec4(color, 0.15);
}
```

#### SVG Animations

**Background Pattern:**
- Stroke-dashoffset animation on scroll
- Pattern rotates 360° over 60s continuously
- On section focus: Pattern scales 1→1.1 with elastic bounce

---

## Section 3: About

### Layout

**Diagonal Split Composition:**
- Screen divided by 20° diagonal line
- Left zone (40%): Image cluster with orbital arrangement
- Right zone (60%): Text content with staggered blocks
- Overlap zone: Image extends 10% into text area

**Grid Structure:**
```
|  [Image 1]    /  "About"              |
|         \    /   "Pop Playground"    |
|  [Img2]  \  /                         |
|           \/    [Description Block]   |
|           /\                          |
|          /  \   [Features Grid]       |
|  [Img3] /    \                        |
```

### Content

**Section Label:** "About"
**Headline:** "Pop Playground"
**Description:** "We're not your average creative studio. We're a explosion of color, a rebellion against boring, and a celebration of pure, unfiltered imagination."

**Feature List:**
1. "Messy Art Sessions"
2. "Wild Imagination Workshops"
3. "Color Explosion Events"

### Images

**About Image 1**
- Resolution: 1024x1024 pixels
- Aspect Ratio: 1:1
- Suggested Generation Ratio: 1:1
- Transparent Background: No
- Photography Style: Top-down flat lay, minimalist
- Subject: Colorful kids' art and craft supplies arranged neatly—crayons, markers, paintbrushes, googly eyes, colored paper
- Composition: Bird's-eye view, organized grid-like arrangement
- Lighting: Bright, even, soft natural light
- Mood: Cheerful, inviting, creative
- Color Palette: Bold primary colors (red, blue, yellow, green, orange)
- Background: Clean white surface
- Full Generation Prompt: "Top-down flat lay of colorful children's art and craft supplies including crayons, markers, paintbrushes, googly eyes, and colored paper arranged neatly on a clean white background. Bright, even, soft lighting. Bold primary colors. Cheerful, inviting, creative mood. Minimalist composition."

**About Image 2**
- Resolution: 1024x1024 pixels
- Aspect Ratio: 1:1
- Suggested Generation Ratio: 1:1
- Transparent Background: No
- Photography Style: Top-down flat lay
- Subject: Children's hands creating art with colorful craft supplies—paper, scissors, glue, pom-poms, pipe cleaners, googly eyes
- Composition: Bird's-eye view, hands in action, supplies scattered
- Lighting: Bright, even, natural light
- Mood: Cheerful, creative, energetic, playful
- Color Palette: Vibrant multi-colors (yellow, green, blue, orange, red)
- Background: Clean white table
- Full Generation Prompt: "Top-down view of children's hands actively crafting with colorful art supplies including paper, scissors, glue, pom-poms, pipe cleaners, and googly eyes. Bright, even, natural lighting. Vibrant multi-colors. Clean white background. Cheerful, creative, energetic mood."

**About Image 3**
- Resolution: 1024x1024 pixels
- Aspect Ratio: 1:1
- Suggested Generation Ratio: 1:1
- Transparent Background: No
- Photography Style: Top-down flat lay
- Subject: Children's hands making paper ice cream crafts with colored paper, scissors, glue, pompoms, markers
- Composition: Bird's-eye view, hands crafting, materials arranged
- Lighting: Bright, even, natural light
- Mood: Cheerful, creative, playful, imaginative
- Color Palette: Soft pastels (pink, blue, yellow, green) with pops of bright color
- Background: Clean white table
- Full Generation Prompt: "Top-down view of children's hands making colorful paper ice cream crafts with colored paper, scissors, glue, pompoms, and markers. Bright, even, natural lighting. Soft pastel colors with bright accents. Clean white background. Cheerful, creative, playful mood."

### Motion Choreography

#### Entrance Sequence
| Element | Animation | Values | Duration | Delay | Easing |
|---------|-----------|--------|----------|-------|--------|
| Section Label | Typewriter | Characters reveal left to right | 400ms | 0ms | linear |
| Headline Word 1 | Slide + Clip | x: -100→0, clipPath reveal | 600ms | 200ms | --ease-dramatic |
| Headline Word 2 | Slide + Clip | x: -100→0, clipPath reveal | 600ms | 350ms | --ease-dramatic |
| Description | Fade + Rise | opacity: 0→1, y: 40→0 | 500ms | 500ms | --ease-smooth |
| Feature 1 | Pop + Rotate | scale: 0→1, rotate: -10°→0° | 400ms | 600ms | --ease-elastic |
| Feature 2 | Pop + Rotate | scale: 0→1, rotate: 10°→0° | 400ms | 700ms | --ease-elastic |
| Feature 3 | Pop + Rotate | scale: 0→1, rotate: -10°→0° | 400ms | 800ms | --ease-elastic |
| Image 1 | 3D Rotate In | rotateY: -45°→0°, opacity: 0→1 | 700ms | 300ms | --ease-dramatic |
| Image 2 | 3D Rotate In | rotateY: -45°→0°, opacity: 0→1 | 700ms | 500ms | --ease-dramatic |
| Image 3 | 3D Rotate In | rotateY: -45°→0°, opacity: 0→1 | 700ms | 700ms | --ease-dramatic |

#### Scroll Effects
| Trigger | Element | Effect | Start | End | Values |
|---------|---------|--------|-------|-----|--------|
| Section Enter | Image Cluster | Parallax Orbit | 0% | 100% | Images orbit around center point |
| 0-100% | Image 1 | Rise | 0% | 100% | y: 50→-50px |
| 0-100% | Image 2 | Float | 0% | 100% | y: 30→-30px, rotate: 0→5° |
| 0-100% | Image 3 | Rise | 0% | 100% | y: 70→-70px |
| 0-100% | Text Block | Parallax | 0% | 100% | y: 0→-30px |
| 50-100% | Features | Stagger Rise | 50% | 100% | Each rises 20px |

#### Continuous Animations

**Image Cluster:**
- Slow orbital rotation around invisible center
- Each image: unique path, 20-40s period
- Subtle scale breathing: 0.98-1.02

**Feature Icons:**
- Gentle bounce: y ±4px over 2s
- Staggered timing for wave effect

#### Interaction Effects

**Image Hover:**
- Scale: 1 → 1.08 (300ms --ease-elastic)
- Shadow expands: 8px → 14px
- Z-index boost (brings to front)
- Slight rotation toward cursor (CSS :hover only)

**Feature Hover:**
- Background: transparent → rgba(247, 149, 233, 0.1)
- Icon spins 360°
- Text color intensifies

### Advanced Effects

#### 3D Elements

**Image Stack:**
- Images arranged with translateZ for depth
- Hover triggers perspective shift
- Active image comes forward (translateZ: 0→50px)

#### SVG Path Animations

**Connecting Lines:**
- SVG paths draw between images on scroll
- Stroke: #000, 2px, dashed
- dashoffset animates with scroll progress
- Creates "constellation" effect

---

## Section 4: Featured

### Layout

**Explosive Radial Composition:**
- Content arranged in expanding radial pattern
- Center: Main headline with circular arrangement
- Left: Image cluster in falling diagonal
- Right: Text blocks in rising diagonal
- Bottom: Cards in scattered, playful arrangement

**Grid Structure:**
```
|                    "Featured"          |
|                     (rotated)          |
|  [Img1]            [CTA]              |
|       \           /                   |
|        [HEADLINE CIRCLE]              |
|       /           \                   |
|  [Img2]           [Description]       |
|                                       |
|  [Card 1]  [Card 2]  [Card 3]         |
|     \         |         /             |
|      \________|________/              |
```

### Content

**Section Label:** "Featured"
**Headline:** "Creative Chaos" (arranged in circular arc)
**Description:** "Dive into our world of colorful adventures and let your imagination run wild!"
**CTA:** "Explore More"

### Images

**Featured Image 1**
- Resolution: 1024x1024 pixels
- Aspect Ratio: 1:1
- Suggested Generation Ratio: 1:1
- Transparent Background: No
- Photography Style: Top-down flat lay
- Subject: Colorful kids' art supplies including crayons, markers, paintbrushes, googly eyes, colored paper, pom-poms
- Composition: Bird's-eye view, scattered arrangement
- Lighting: Bright, even, soft natural light
- Mood: Cheerful, creative, inviting, playful
- Color Palette: Bold primary colors (red, blue, yellow, green, orange)
- Background: Clean white surface
- Full Generation Prompt: "Top-down flat lay of colorful children's art supplies including crayons, markers, paintbrushes, googly eyes, colored paper, and pom-poms arranged playfully on a clean white background. Bright, even, soft lighting. Bold primary colors. Cheerful, creative, inviting mood."

**Featured Image 2**
- Resolution: 1024x1024 pixels
- Aspect Ratio: 1:1
- Suggested Generation Ratio: 1:1
- Transparent Background: No
- Photography Style: Top-down flat lay
- Subject: Children's hands making colorful paper ice cream crafts with colored paper, scissors, glue, pompoms, markers
- Composition: Bird's-eye view, hands actively crafting
- Lighting: Bright, even, natural light
- Mood: Cheerful, creative, playful, imaginative
- Color Palette: Soft pastels (pink, blue, yellow, green) with pops of bright color
- Background: Clean white table
- Full Generation Prompt: "Top-down view of children's hands making colorful paper ice cream crafts with colored paper, scissors, glue, pompoms, and markers. Bright, even, natural lighting. Soft pastel colors with bright accents. Clean white background. Cheerful, creative, playful mood."

### Motion Choreography

#### Entrance Sequence
| Element | Animation | Values | Duration | Delay | Easing |
|---------|-----------|--------|----------|-------|--------|
| Section Label | Spin + Fade | rotate: -180°→0°, opacity: 0→1 | 600ms | 0ms | --ease-playful |
| Headline Circle | Scale + Rotate | scale: 0→1, rotate: 360°→0° | 800ms | 200ms | --ease-elastic |
| Image 1 | Throw In | x: -200→0, rotate: -30°→5° | 700ms | 400ms | --ease-bounce |
| Image 2 | Throw In | x: 200→0, rotate: 30°→-5° | 700ms | 550ms | --ease-bounce |
| Description | Fade + Rise | opacity: 0→1, y: 30→0 | 500ms | 700ms | --ease-smooth |
| CTA | Pop | scale: 0→1.1→1 | 500ms | 900ms | --ease-elastic |
| Cards | Scatter In | From center outward, scale: 0→1 | 500ms | 1000ms+ | --ease-playful |

#### Scroll Effects
| Trigger | Element | Effect | Start | End | Values |
|---------|---------|--------|-------|-----|--------|
| 0-100% | Headline Circle | Rotation | 0% | 100% | rotate: 0→45° |
| 0-100% | Image 1 | Float Up | 0% | 100% | y: 0→-100px |
| 0-100% | Image 2 | Float Down | 0% | 100% | y: 0→50px |
| 0-100% | Cards | Spread | 0% | 100% | gap: 20px→40px |
| 50-100% | Description | Parallax | 50% | 100% | y: 0→-40px |

#### Continuous Animations

**Headline Circle:**
- Slow rotation: 360° over 60s
- Letters orbit independently within
- Scale pulse: 1→1.02→1 over 3s

**Images:**
- Floating with different phases
- Subtle rotation oscillation: ±3°

**Cards:**
- Gentle hover animation (y ±5px)
- Staggered timing creates wave

#### Interaction Effects

**Headline Hover:**
- Letters scatter slightly outward
- Rotation accelerates
- Color shifts through palette

**Card Hover:**
- Scale: 1 → 1.08
- Rotation: random ±5°
- Shadow expands dramatically
- Background pattern intensifies

### Advanced Effects

#### 3D Elements

**Headline Circle:**
- 3D cylinder effect with text wrapping
- Perspective: 800px
- Letters have individual Z-depth

#### SVG Animations

**Radial Lines:**
- SVG lines connecting headline to cards
- Stroke-dashoffset animation on scroll
- Creates "energy flow" effect

---

## Section 5: Gallery

### Layout

**Scattered Polaroid Composition:**
- Images arranged like scattered photos on table
- Each image: unique rotation (-8° to 8°)
- Overlapping layers with z-index variation
- Organic, playful chaos (but balanced)

**Grid Structure:**
```
|  [Img 1: -5°]                         |
|          [Img 2: 7°]                  |
|  [Img 3: -3°]    [Img 4: 6°]          |
|              [Img 5: -8°]             |
|       [CTA: 0°]                       |
```

### Content

**Section Label:** "Gallery"
**Headline:** "Colorful Moments"
**CTA:** "View All"

### Images

**Gallery Image 1**
- Resolution: 1024x1024 pixels
- Aspect Ratio: 1:1
- Suggested Generation Ratio: 1:1
- Transparent Background: No
- Photography Style: Top-down flat lay
- Subject: Colorful children's art supplies including crayons, markers, paintbrushes, googly eyes, colored paper
- Composition: Bird's-eye view, neatly arranged
- Lighting: Bright, even, soft natural light
- Mood: Cheerful, inviting, creative
- Color Palette: Bold primary colors (red, blue, yellow, green, orange)
- Background: Clean white surface
- Full Generation Prompt: "Top-down flat lay of colorful children's art supplies including crayons, markers, paintbrushes, googly eyes, and colored paper neatly arranged on a clean white background. Bright, even, soft lighting. Bold primary colors. Cheerful, inviting, creative mood."

**Gallery Image 2**
- Resolution: 1024x1024 pixels
- Aspect Ratio: 1:1
- Suggested Generation Ratio: 1:1
- Transparent Background: No
- Photography Style: Top-down flat lay
- Subject: Children's hands making colorful paper ice cream crafts
- Composition: Bird's-eye view, hands actively crafting
- Lighting: Bright, even, natural light
- Mood: Cheerful, creative, playful, imaginative
- Color Palette: Soft pastels (pink, blue, yellow, green)
- Background: Clean white table
- Full Generation Prompt: "Top-down view of children's hands making colorful paper ice cream crafts with colored paper, scissors, glue, pompoms, and markers. Bright, even, natural lighting. Soft pastel colors. Clean white background. Cheerful, creative, playful mood."

**Gallery Image 3**
- Resolution: 1024x1024 pixels
- Aspect Ratio: 1:1
- Suggested Generation Ratio: 1:1
- Transparent Background: No
- Photography Style: Top-down flat lay
- Subject: Colorful art supplies for kids
- Composition: Bird's-eye view, scattered arrangement
- Lighting: Bright, even, soft natural light
- Mood: Cheerful, creative, inviting, playful
- Color Palette: Bold primary colors
- Background: Clean white surface
- Full Generation Prompt: "Top-down flat lay of colorful children's art supplies on a clean white background. Bright, even, soft lighting. Bold primary colors. Cheerful, creative, inviting mood."

**Gallery Image 4**
- Resolution: 1024x1024 pixels
- Aspect Ratio: 1:1
- Suggested Generation Ratio: 1:1
- Transparent Background: No
- Visual Style: Modern abstract collage, Memphis design
- Subject: Abstract organic blob shape in bright yellow with wavy multicolored lines
- Composition: Centered blob with radiating lines
- Colors: Bright yellow, pink, green, blue, orange, red on white
- Mood: Playful, energetic, whimsical
- Full Generation Prompt: "Modern abstract collage with Memphis design influence, featuring a large organic yellow blob shape with wavy, multicolored lines (pink, green, blue, orange, red) radiating outward. Playful, energetic, whimsical mood. White background."

**Gallery Image 5**
- Resolution: 1024x1024 pixels
- Aspect Ratio: 1:1
- Suggested Generation Ratio: 1:1
- Transparent Background: No
- Visual Style: Whimsical children's illustration, watercolor
- Subject: Cute smiling whale with closed eyes, blowing heart-shaped spray
- Composition: Whale centered with small fish and bubbles
- Colors: Soft blues, pastel pink, light blue background
- Mood: Cheerful, friendly, dreamy, peaceful
- Full Generation Prompt: "Whimsical children's illustration of a cute, smiling whale with closed eyes and rosy cheeks, blowing heart-shaped spray. Small fish and bubbles float around. Soft watercolor style with pastel colors. Light blue background. Cheerful, friendly, dreamy mood."

### Motion Choreography

#### Entrance Sequence
| Element | Animation | Values | Duration | Delay | Easing |
|---------|-----------|--------|----------|-------|--------|
| Section Label | Drop + Bounce | y: -50→0, scale: 0.8→1 | 500ms | 0ms | --ease-bounce |
| Headline | Letter Scatter | Letters from random positions | 800ms | 200ms | --ease-elastic |
| Image 1 | Throw Down | y: -200→0, rotate: 0→-5° | 600ms | 400ms | --ease-playful |
| Image 2 | Throw Down | y: -200→0, rotate: 0→7° | 600ms | 500ms | --ease-playful |
| Image 3 | Throw Down | y: -200→0, rotate: 0→-3° | 600ms | 600ms | --ease-playful |
| Image 4 | Throw Down | y: -200→0, rotate: 0→6° | 600ms | 700ms | --ease-playful |
| Image 5 | Throw Down | y: -200→0, rotate: 0→-8° | 600ms | 800ms | --ease-playful |
| CTA | Pop Up | scale: 0→1.1→1 | 500ms | 1000ms | --ease-elastic |

#### Scroll Effects
| Trigger | Element | Effect | Start | End | Values |
|---------|---------|--------|-------|-----|--------|
| 0-100% | Images | Parallax Scatter | 0% | 100% | Each moves unique y-distance |
| 0-100% | Image 1 | Float | 0% | 100% | y: 0→-60px |
| 0-100% | Image 2 | Float | 0% | 100% | y: 0→40px |
| 0-100% | Image 3 | Float | 0% | 100% | y: 0→-30px |
| 0-100% | Image 4 | Float | 0% | 100% | y: 0→50px |
| 0-100% | Image 5 | Float | 0% | 100% | y: 0→-40px |
| 50-100% | CTA | Rise | 50% | 100% | y: 0→-20px |

#### Continuous Animations

**Polaroid Stack Effect:**
- Images subtly shift positions (5px drift)
- Rotation oscillates ±2°
- Creates "breathing" stack feel

**Shadow Animation:**
- Shadow offset pulses: 8px → 10px → 8px
- Creates floating effect

#### Interaction Effects

**Image Hover:**
- Comes to front (z-index boost)
- Scale: 1 → 1.12
- Rotation: snaps to 0°
- Shadow: expands to 16px
- Neighboring images slightly pushed away

**Image Click:**
- Scale: 1.2 with shadow 20px
- Lightbox opens with zoom transition

### Advanced Effects

#### 3D Elements

**Stack Depth:**
- Each image has translateZ value
- Hover brings forward, push others back
- Perspective: 1000px on container

---

## Section 6: CTA

### Layout

**Converging Energy Composition:**
- Central focus point with converging lines
- Text arranged in dynamic diagonal
- Images orbit around central CTA
- Memphis shapes create energy lines toward button

**Grid Structure:**
```
|    \         /    "Ready to"           |
|     \       /     "Create"             |
|  [Img1] [Img2]    "Something"          |
|       | |          "Amazing?"          |
|       | |             |                |
|       \ /             |                |
|        [CTA BUTTON]   |                |
|       / \             |                |
|  [Shape] [Shape]                     |
```

### Content

**Headline:** "Ready to Create Something Amazing?"
**CTA Button:** "Join the Fun!"

### Images

**CTA Image 1**
- Resolution: 1024x1024 pixels
- Aspect Ratio: 1:1
- Suggested Generation Ratio: 1:1
- Transparent Background: No
- Photography Style: Top-down flat lay
- Subject: Colorful kids' art and craft supplies
- Composition: Bird's-eye view, neatly organized
- Lighting: Bright, even, soft natural light
- Mood: Cheerful, inviting, creative
- Color Palette: Bold primary colors
- Background: Clean white surface
- Full Generation Prompt: "Top-down flat lay of colorful children's art and craft supplies on a clean white background. Bright, even, soft lighting. Bold primary colors. Cheerful, inviting, creative mood."

**CTA Image 2**
- Resolution: 1024x1024 pixels
- Aspect Ratio: 1:1
- Suggested Generation Ratio: 1:1
- Transparent Background: No
- Photography Style: Top-down flat lay
- Subject: Children's hands making colorful paper crafts
- Composition: Bird's-eye view, hands in action
- Lighting: Bright, even, natural light
- Mood: Cheerful, creative, playful
- Color Palette: Soft pastels with bright accents
- Background: Clean white table
- Full Generation Prompt: "Top-down view of children's hands making colorful paper crafts on a clean white background. Bright, even, natural lighting. Soft pastel colors with bright accents. Cheerful, creative, playful mood."

### Motion Choreography

#### Entrance Sequence
| Element | Animation | Values | Duration | Delay | Easing |
|---------|-----------|--------|----------|-------|--------|
| Energy Lines | Draw In | strokeDashoffset: 100%→0% | 800ms | 0ms | --ease-smooth |
| Image 1 | Orbit In | From off-screen, rotating | 700ms | 200ms | --ease-playful |
| Image 2 | Orbit In | From opposite direction | 700ms | 350ms | --ease-playful |
| "Ready to" | Slide + Fade | x: -100→0, opacity: 0→1 | 500ms | 400ms | --ease-smooth |
| "Create" | Slide + Fade | x: 100→0, opacity: 0→1 | 500ms | 500ms | --ease-smooth |
| "Something" | Slide + Fade | x: -100→0, opacity: 0→1 | 500ms | 600ms | --ease-smooth |
| "Amazing?" | Explosive | scale: 0→1.2→1, rotate: -10°→0° | 600ms | 700ms | --ease-elastic |
| CTA Button | Pulse In | scale: 0→1 with glow effect | 600ms | 900ms | --ease-bounce |

#### Scroll Effects
| Trigger | Element | Effect | Start | End | Values |
|---------|---------|--------|-------|-----|--------|
| 0-100% | Images | Orbit | 0% | 100% | Rotate around CTA center |
| 0-100% | Energy Lines | Intensity | 0% | 100% | Opacity 0.3→1 |
| 0-100% | Headline | Parallax | 0% | 100% | y: 0→-40px |
| 50-100% | CTA | Glow | 50% | 100% | Box-shadow intensifies |

#### Continuous Animations

**Energy Lines:**
- Pulsing glow animation
- Color cycles through brand palette
- Subtle dash animation (flow toward CTA)

**CTA Button:**
- Pulsing glow: shadow 8px→12px→8px over 2s
- Subtle scale: 1→1.02→1 over 3s
- Background color shimmer

**Images:**
- Orbit around CTA (slow, 30s cycle)
- Scale breathing

#### Interaction Effects

**CTA Button Hover:**
- Scale: 1 → 1.15
- Rotation: 0° → -3°
- Shadow: 8px → 20px with colored glow
- Background: #F795E9 → #F78787
- Text: shakes with excitement
- Energy lines accelerate toward button

**CTA Button Click:**
- Explosive ripple effect
- Particles burst outward
- Scale: 1.2 → 1 (settle)

### Advanced Effects

#### Particle System

**Energy Particles:**
- 20-30 small dots following energy lines
- Colors from brand palette
- Size: 4-8px
- Movement: Flow toward CTA button
- Speed: 2-5px per frame
- Fade out at destination

#### 3D Elements

**Button 3D:**
- Perspective: 800px
- Transform-style: preserve-3d
- Hover triggers rotateX/Y toward cursor
- Inner text has translateZ for depth

---

## Section 7: Contact

### Layout

**Organic Split Composition:**
- Left (55%): Form with flowing, organic shape background
- Right (45%): Image with Memphis frame elements
- Form fields arranged in playful, non-linear positions
- Connectors between form and image

**Grid Structure:**
```
|  _____________                  [Img] |
| |  "Contact"  |                /   /  |
| |             |             /   /     |
| | [Name]      |          [Shape]      |
| |    [Email]  |                      |
| | [Message]   |                      |
| |             |                      |
| |  [Submit]   |                      |
|  _____________|                      |
```

### Content

**Section Label:** "Contact"
**Headline:** "Let's Chat!"
**Form Fields:**
- Name (with icon)
- Email (with icon)
- Message (textarea with icon)
- Submit: "Send Message"

### Images

**Contact Image**
- Resolution: 1024x1024 pixels
- Aspect Ratio: 1:1
- Suggested Generation Ratio: 1:1
- Transparent Background: No
- Photography Style: Top-down flat lay
- Subject: Colorful kids' art and craft supplies
- Composition: Bird's-eye view, neatly organized
- Lighting: Bright, even, soft natural light
- Mood: Cheerful, inviting, creative
- Color Palette: Bold primary colors
- Background: Clean white surface
- Full Generation Prompt: "Top-down flat lay of colorful children's art and craft supplies on a clean white background. Bright, even, soft lighting. Bold primary colors. Cheerful, inviting, creative mood."

### Motion Choreography

#### Entrance Sequence
| Element | Animation | Values | Duration | Delay | Easing |
|---------|-----------|--------|----------|-------|--------|
| Form Container | Morph In | clipPath: circle(0%)→circle(100%) | 800ms | 0ms | --ease-dramatic |
| Section Label | Typewriter | Characters reveal | 400ms | 300ms | linear |
| Headline | Bounce In | scale: 0→1.1→1, y: 30→0 | 500ms | 400ms | --ease-bounce |
| Name Field | Slide Right | x: -50→0, opacity: 0→1 | 400ms | 500ms | --ease-smooth |
| Email Field | Slide Left | x: 50→0, opacity: 0→1 | 400ms | 600ms | --ease-smooth |
| Message Field | Rise Up | y: 30→0, opacity: 0→1 | 400ms | 700ms | --ease-smooth |
| Submit Button | Pop | scale: 0→1.1→1 | 400ms | 850ms | --ease-elastic |
| Image | 3D Rotate In | rotateY: 30°→0°, opacity: 0→1 | 700ms | 400ms | --ease-dramatic |

#### Scroll Effects
| Trigger | Element | Effect | Start | End | Values |
|---------|---------|--------|-------|-----|--------|
| 0-100% | Form Container | Parallax | 0% | 100% | y: 0→-30px |
| 0-100% | Image | Parallax | 0% | 100% | y: 0→-50px |
| 0-100% | Memphis Shapes | Float | 0% | 100% | Various y movements |

#### Continuous Animations

**Form Background:**
- Organic shape morphs slowly
- Color shifts through light pastels
- 15s morph cycle

**Input Icons:**
- Gentle bounce: y ±3px over 2s
- Staggered timing

#### Interaction Effects

**Input Focus:**
- Border: 2px → 3px, color → #9B87F7
- Label floats up with scale reduction
- Icon spins 360°
- Background: subtle glow

**Input Hover:**
- Border color shift
- Slight scale: 1 → 1.01

**Submit Button Hover:**
- Scale: 1 → 1.08
- Rotation: 0° → -3°
- Shadow: 4px → 10px
- Background: #F795E9 → #F78787
- Arrow icon slides right

**Submit Button Click:**
- Ripple effect from click point
- Scale: 0.95 → 1
- Success: transforms to checkmark

### Advanced Effects

#### 3D Elements

**Form Container:**
- Perspective: 1000px
- Subtle rotateX on scroll
- Creates depth illusion

#### SVG Morphing

**Background Shape:**
- SVG with multiple path states
- Morphs between organic shapes
- Responds to scroll velocity

---

## Section 8: Footer

### Layout

**Layered Memphis Composition:**
- Multiple pattern layers at different opacities
- Content floating above patterns
- Scattered Memphis elements as decoration
- Diagonal energy lines connecting sections

**Grid Structure:**
```
|  [Pattern Layer 1 - 0.1 opacity]       |
|  [Pattern Layer 2 - 0.05 opacity]      |
|  ____________________________________ |
| | Logo          |  Links    | Newsletter| |
| |               |           | [Email]   | |
| | Description   |           | [Submit]  | |
| |_______________|___________|__________| |
|  ____________________________________ |
| |            Copyright               | |
| |____________________________________| |
|  [Memphis Shapes - scattered]          |
```

### Content

**Logo:** Pop Playground
**Description:** "Where creativity knows no bounds and every day is a new adventure!"

**Quick Links:**
- Home
- About
- Gallery
- Contact

**Social Icons:** Facebook, Twitter, Instagram

**Newsletter:**
- Headline: "Stay Colorful!"
- Input: Email
- Button: "Subscribe"

**Copyright:** "© 2024 Pop Playground. All rights reserved."

### Motion Choreography

#### Entrance Sequence
| Element | Animation | Values | Duration | Delay | Easing |
|---------|-----------|--------|----------|-------|--------|
| Pattern Layers | Fade In | opacity: 0→0.1/0.05 | 800ms | 0ms | --ease-smooth |
| Logo | Bounce In | scale: 0→1.1→1 | 500ms | 200ms | --ease-elastic |
| Description | Fade + Rise | opacity: 0→1, y: 20→0 | 400ms | 350ms | --ease-smooth |
| Links | Stagger Slide | x: -30→0, opacity: 0→1 | 300ms | 400ms+ | --ease-smooth |
| Social Icons | Pop In | scale: 0→1 | 300ms | 600ms+ | --ease-elastic |
| Newsletter | Slide Left | x: 50→0, opacity: 0→1 | 500ms | 500ms | --ease-smooth |
| Memphis Shapes | Scatter In | From edges, scale: 0→1 | 500ms | 700ms+ | --ease-playful |

#### Scroll Effects
| Trigger | Element | Effect | Start | End | Values |
|---------|---------|--------|-------|-----|--------|
| 0-100% | Pattern Layers | Parallax | 0% | 100% | Different speeds (0.5x, 0.7x) |
| 0-100% | Memphis Shapes | Float | 0% | 100% | Various movements |
| 50-100% | Content | Fade | 50% | 100% | opacity: 1→0.8 |

#### Continuous Animations

**Pattern Layers:**
- Slow rotation: 360° over 120s
- Subtle scale breathing

**Memphis Shapes:**
- Independent floating paths
- Color cycling
- Scale oscillation

**Social Icons:**
- Gentle hover: y ±3px
- Staggered wave pattern

#### Interaction Effects

**Link Hover:**
- Color: #000 → #9B87F7
- Transform: translateX(5px)
- Underline draws from left

**Social Icon Hover:**
- Scale: 1 → 1.2
- Rotation: 0° → 10°
- Background: brand color appears

**Newsletter Input Focus:**
- Border: 2px → 3px, #9B87F7
- Icon animation

**Subscribe Button Hover:**
- Scale: 1 → 1.08
- Rotation: -3°
- Shadow expansion

### Advanced Effects

#### SVG Pattern Animation

**Memphis Patterns:**
- Lines draw on scroll
- Shapes rotate independently
- Colors shift through palette

---

## Technical Implementation Notes

### Required Libraries

**Core Animation:**
- GSAP 3.x with ScrollTrigger plugin
- CSS Custom Properties for cursor tracking
- Intersection Observer API for scroll triggers

**Optional Enhancements:**
- Lottie for complex icon animations
- Three.js only for hero shader (minimal implementation)

### Performance Optimization

**Critical Rules:**
- ✅ Use transform and opacity exclusively for animations
- ✅ CSS :hover for mouse interactions (not mousemove handlers)
- ✅ Throttle any JS mouse tracking to 16ms minimum
- ✅ will-change applied strategically before animation, removed after
- ✅ Intersection Observer for triggering (not scroll event listeners)
- ✅ CSS containment on animated sections
- ✅ Object pooling for any particle effects
- ✅ requestAnimationFrame with timestamp checking (no setState)

**Avoid:**
- ❌ setState on mousemove in React
- ❌ Dynamic blur during scroll
- ❌ Animating width/height/top/left
- ❌ Unthrottled scroll event handlers
- ❌ Too many simultaneous 3D transforms

### Accessibility

**Reduced Motion Support:**
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

**Focus States:**
- All interactive elements have visible focus indicators
- Focus rings match brand colors
- Skip links provided for keyboard navigation

### Browser Support

**Feature Detection:**
- CSS.supports() for advanced features
- Progressive enhancement approach
- Fallback to simpler animations for older browsers

**Minimum Support:**
- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

---

## Responsive Design

### Breakpoints

- **Desktop:** > 991px (full experience)
- **Tablet:** 768px - 991px (simplified animations)
- **Mobile:** < 768px (essential animations only)

### Responsive Adaptations

**Desktop (> 991px):**
- Full animation suite
- All 3D effects active
- Particle systems enabled
- Complex hover interactions

**Tablet (768px - 991px):**
- Reduced parallax intensity (50%)
- Simplified 3D (no shader)
- Touch-optimized interactions
- Fewer particles

**Mobile (< 768px):**
- Essential animations only
- No 3D effects
- Simplified scroll triggers
- Touch gestures replace hover
- Performance priority

### Typography Adjustments

- H1: 70px → 50px → 40px
- H2: 50px → 40px → 32px
- H3: 40px → 32px → 26px
- H4: 30px → 26px → 22px
- Body: 18px → 16px → 14px

### Image Scaling

- All images: responsive with srcset
- Square ratio maintained
- Max-width: 100% constraint

---

## Animation Summary

### Section Animation Intensity

| Section | Entrance | Scroll | Continuous | Interaction | Priority |
|---------|----------|--------|------------|-------------|----------|
| Navigation | Medium | Medium | Low | High | High |
| Hero | Ultra | High | High | High | Ultra |
| About | High | Medium | Medium | Medium | High |
| Featured | High | Medium | Medium | High | High |
| Gallery | High | Medium | Low | High | Medium |
| CTA | Ultra | Medium | High | Ultra | Ultra |
| Contact | Medium | Low | Low | Medium | Medium |
| Footer | Medium | Low | Low | Medium | Low |

### Performance Budget

- 60fps target on all animations
- Max 5 simultaneous complex animations
- Particle count: 30 maximum
- Shader: Hero section only
- 3D transforms: Limited to 10 elements

---

## Quality Metrics

This design achieves:
- ✓ **Emotional Impact** – Joyful, playful motion that makes users smile
- ✓ **Memorability** – Unique Memphis-inspired animations stand out
- ✓ **Brand Cohesion** – Every motion reinforces "playful creativity"
- ✓ **Technical Excellence** – 60fps performance with accessibility
- ✓ **Layout Innovation** – Breaking grids with purpose and style
- ✓ **Professional Polish** – Refined timing and easing throughout
- ✓ **Typography Mastery** – Cherry Bomb font animated with character
- ✓ **Visual Hierarchy** – Motion guides attention effectively
