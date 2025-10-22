const useNormalizeProductName = () => {
    const normalizeProductName = (name: string) => {
        return name?.toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '') // Loại bỏ dấu tiếng Việt
            .replace(/[đĐ]/g, 'd') // Chuyển đổi chữ "đ"
            .replace(/ /g, '-') // Thay dấu cách bằng dấu "-"
            .replace(/-+/g, '-'); // Loại bỏ dấu "-" dư thừa
    };

    return { normalizeProductName };
};

export default useNormalizeProductName;
