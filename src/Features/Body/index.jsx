import React from 'react';
import VersionContent from './Components/VersionContent';
import VersionItem from './Components/VersionItem';

import "./style.scss";
import { useTranslation } from 'react-i18next';

const DEMO_DATA_VERSON =[
    {
        version:"1.3",
        newfeatues:[
            "Bạn có thể dùng tính năng tuỳ chỉnh để tối ưu trải nghiệm học tập được cá nhân hoá cho riêng bạn",
            "Bạn có thể gửi lại góp ý cho team WordsMine để team nỗ lực hỗ trợ các bạn học tập tốt hơn.",
            "Bạn có thể đổi avatar yêu thích của riêng mình",
            "Những từ vựng mà bạn đã thêm, giờ đây bạn có thể xem nguồn website mà bạn đã lưu từ vựng đó.",
            "Những tính năng mới của nền tảng WordsMine sẽ được thể hiện trong thông báo để bạn tiện theo dõi.",
            "Ngoài ra, team WordsMine còn thêm chức năng giới thiệu nền tảng dành cho những người dùng mới nhằm để giúp quen với nền tảng WordsMine hơn!",
            "Tối ưu hóa hiệu suất."
        ],
        improvements:[
            "Optimizing performance.",
        ],
        bugfixes:[]
        
    },
    {
        version:"1.2",
        newfeatues:[
            "Thêm nhanh từ mới trong trang extension popup.",
            "Chức năng tra định nghĩa đã được nâng cấp, bạn có thể tra từ với nghĩa chuyên ngành.",
            "Bạn sẽ biết cách sử dụng từ qua nhiều ví dụ khác nhau và có thể lưu lại ví dụ mà bạn muốn.",
            "Bên cạnh việc thêm từ thông qua đường link tắt, bạn còn có thể thêm nhanh định nghĩa và ví dụ đi kèm.",
            "Bạn có thể tạo từ mục để lưu từ vựng theo nhiều chủ đề khác nhau. Ví dụ: thư mục IELTS để lưu các từ vựng mà bạn cần cho kỳ thi!",
            "Bạn có thể xem từ vựng trong chế độ phân trang hoặc xem tất cả từ vựng một trang.",
            "Card từ vựng có thêm chế độ hiển thị mới, bạn có thể xem từ vựng phiên âm và định nghĩa cá nhân một cùng một lúc.",
            "Bạn có thể cài đặt trang mà bạn muốn hiển thị/ tắt popup tra từ."
        ],
        improvements:[
           "Hiển thị thông báo khi người dùng lưu một từ đã được thêm trước đó.",
           "Hiển thị nút đăng nhập khi người dùng lưu một từ vựng từ popup tra từ mà chưa đăng nhập.",
           "Hiển thị định nghĩa tiếng Việt trên định nghĩa tiếng Anh trong definition popup của extension.",
           "Hiển thị tùy chọn hiện tại khi người dùng chọn một chế độ sắp xếp hoặc nhóm theo thư mục.",
           "Đăng nhập bằng tên đăng nhập hoặc email."
        ]
        ,
        bugfixes:[
            "Hiển thị trạng thái lưu của những từ không đồng nhất trong popup định nghĩa và danh sách từ trong extension.",
            "Không click vào link trong menu được.",
            "Kiểm tra tên đăng nhập hợp lệ khi đăng ký tài khoản.",
            "Kiểm tra tên đăng nhập hợp lệ khi cập nhật thông tin cá nhân.",
            "Tải lại trang khi thay đổi chế độ hiển thị trang.",
            "Sắp xếp từ theo thời gian.",
            "Hiển thị từ không chính xác khi thay đổi chế độ hiển thị trang.",
            "Xóa từ.",
            "Từ hiển thị trong popup và trong extension không đồng nhất.",
            "Hiển thị thông báo lỗi khi lưu từ bị trùng lặp.",
            "Sửa vị trí phản hồi của người dùng.",
            "Không lấy được phát âm."
        ]
    },
    {
        version:"1.1",
        newfeatues:[
            "Người dùng có thể lưu từ vựng nhanh chóng bằng cách truy cập đường link tắt.",
            "Người dùng có thể biết được lịch sử nguồn lưu từ vựng.",
            "Người dùng có thể nhóm từ vựng theo thư mục.",
            "Người dùng có thể dùng thử chức năng của extension ngay trên trang chủ Wordsmine!",
            "Người dùng có thể thêm định nghĩa cho từ vào kho lưu trữ cá nhân.",
        ],
        improvements:[
           "Thay đổi bố cục giao diện.",
           "Hiển thị chú thích hướng dẫn cho các nút bấm.",
           "Hiển thị chế độ sắp xếp từ vựng trang chủ từ vựng.",
           "Thay đổi vị trí icon nhận xét từ người dùng.",
           "Tìm kiếm từ vựng không phân biệt chữ hoa, chữ thường.",
           "Hiện thị thông báo khi người dùng lưu từ vựng thành công từ popup extension."
        ]
        ,
        bugfixes:[
            "Chỉnh sửa định dạng của định nghĩa sau khi người dùng thêm định nghĩa mới.",
            "Định dạng lại nội dung card từ vựng.",
            "Lấy phát âm.",
            "Hiển thị thông báo lỗi khi không tìm thấy âm thanh.",
            "Hiển thị số từ được chọn còn lại sau khi xóa từ vựng.",
            "Đổi phông chữ để hỗ trợ tiêng Anh và tiếng Việt.",
            "Sắp xếp thứ tự từ vựng theo thời gian cập nhật.",
            "Đặt lại modal chi tiết từ vựng sau mỗi lần đóng.",
        ]
    }
]

Body.propTypes = {
    
};

function Body(props) {
    const { t } = useTranslation();
    return (
        <div>
            <div className="container body">
                <div className="row mt-5">
                
                    <div className="col-lg-8 order-lg-1 order-2">
                        <h3 className="text-left body__heading">{DEMO_DATA_VERSON.length} {t('version')}</h3>
                            <VersionContent version={DEMO_DATA_VERSON}/>
                    </div>
                    <div className="col-lg-4 order-lg-2 order-1">
                        <h3 className="text-left pl-2 body__heading">{t('jumpto')}</h3>
                        <div className="body__version mt-5">
                            <div className="body__versionleft">
                            <VersionItem version={t('version')+" 1.3"} link="1.3" date={t('august2021')}/>
                            <VersionItem version={t('version')+" 1.2"} link="1.2" date={t('april2021')}/>
                            <VersionItem version={t('version')+" 1.1"} link="1.1" date={t('march2021')}/>
                            </div>
                        </div>
                    </div>

                </div>
               
            </div>
        </div>
    );
}

export default Body;