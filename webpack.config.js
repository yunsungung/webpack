const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports ={
    // 파일을 읽어들이기 시작하는 진입점 설정
    entry : './js/main.js',

    // 결과물(번들) 을 반환하는 설정
    output : {
       /*  path : path.resolve(__dirname , 'dist'),
        filename : 'main.js', */
        clean : true
    },

    module : {
        rules : [
            {
                test : /\.s?css$/,
                use : [
                    'style-loader', // 스타일로 적용
                    'css-loader', // css로더로 읽어서
                    'postcss-loader', // 접두사 
                    'sass-loader'
                ]
            },
            {
                test : /\.js$/,
                use : [
                    'babel-loader'
                ]
            }
        ]
    },

    // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
    plugins : [
        new HtmlPlugin({
            template : './index.html'
        }),
        new CopyPlugin({
            patterns : [
                {from : 'static'}
            ]
        })
    ],

    // 호스트 주소 넣기
    devServer : {
        host : 'localhost'
    }
}