import React from 'react';

export function Footer(props) {
    return (
        <footer>
            <p>&copy; Hannah Yi, Grace Suyama, Kayla Doan, Athena Le & INFO 340</p>
        </footer>
    );
}

// for quiz page and home page if without brown border on bottom
export function DarkFooter(props) {
    return (
        <footer>
            <p className="dark-footer">&copy; Hannah Yi, Grace Suyama, Kayla Doan, Athena Le & INFO 340</p>
        </footer>
    );
}