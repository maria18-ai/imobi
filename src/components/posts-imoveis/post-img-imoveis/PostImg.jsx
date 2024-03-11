import React from 'react';
import './PostImg.css'
import { Link } from 'react-router-dom';

export const PostImg = () => {
    const handleFileUpload = async () => {
        const fileInput = document.getElementById('image');
        const file = fileInput.files[0];
        const token = localStorage.getItem('token');
        const id = localStorage.getItem('postId');

        if (!file) {
            console.error('No file selected');
            return;
        }

        if (!token) {
            console.error('Token not found in localStorage');
            return;
        }

        if (!id) {
            console.error('Post ID not found in localStorage');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch(`http://localhost:8080/post/insert/image/${id}`, {
                method: 'PUT',
                body: formData,
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) {
                throw new Error('Failed to upload image');
            }

            console.log('Image uploaded successfully');
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    return (
        <div className="container">
            <div className='header-img'>
                <h3>Estamos quase lá...</h3>
                <h4>Acrescente uma foto do meu imóvel!</h4>
                <div className='post-img'>
                    
                    <label>
                    <input type="file" name="image" id="image"/> Escolha uma imagem
                    </label>
                    <Link to='/'>
                        <button onClick={handleFileUpload} className='btn-sendPhoto'>Enviar</button> {/* Botão de envio */}
                    </Link>
                </div>
            </div>
        </div>
    );
};
