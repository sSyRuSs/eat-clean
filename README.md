# Eat Clean - Website Bán Thực Phẩm Eat Clean

Website tĩnh bán thực phẩm eat clean với giao diện màu xanh pastel (#A8E6A3).

## Công nghệ sử dụng

- Next.js 14 (Static Site Generation)
- React 18
- TypeScript
- CSS Modules

## Cấu trúc dự án

```
Eat-clean-web/
├── app/
│   ├── about/
│   │   ├── page.tsx          # Trang giới thiệu
│   │   └── about.module.css
│   ├── products/
│   │   ├── page.tsx          # Trang sản phẩm
│   │   └── products.module.css
│   ├── globals.css           # CSS toàn cục
│   ├── layout.tsx            # Layout chính
│   ├── page.tsx              # Trang chủ
│   └── page.module.css
├── .github/
│   └── copilot-instructions.md
├── next.config.js
├── package.json
├── tsconfig.json
└── README.md
```

## Cài đặt

```bash
# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build trang tĩnh
npm run build

# Export trang tĩnh
npm run export
```

## Tính năng

- ✅ Trang chủ với hero section và giới thiệu
- ✅ Trang sản phẩm với 6 món eat clean
- ✅ Trang giới thiệu về công ty
- ✅ Thiết kế responsive
- ✅ Màu sắc xanh pastel (#A8E6A3)
- ✅ 100% trang tĩnh, không cần backend

## Màu sắc chủ đạo

- Pastel Green: `#A8E6A3`
- Dark Green: `#6DB86B`
- Light Green: `#D4F1D2`
- Background: `#F8FBF8`

## Triển khai

### GitHub Pages

Website có thể deploy lên GitHub Pages miễn phí:

1. **Push code lên GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/eat-clean-web.git
git push -u origin main
```

2. **Build và export:**
```bash
npm run build
npm run export
```

3. **Deploy thủ công:**
   - Copy thư mục `out/` lên branch `gh-pages`
   - Hoặc sử dụng GitHub Actions (xem file `.github/workflows/deploy.yml`)

4. **Cài đặt GitHub Pages:**
   - Vào Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` / `root`

### Các nền tảng khác

Website cũng có thể deploy lên:
- **Vercel** - Deploy tự động từ GitHub
- **Netlify** - Drag & drop thư mục `out/`
- **Cloudflare Pages**
- **AWS S3 + CloudFront**
- Any static hosting service

## License

MIT
